-- 2026-10-29 칸 단위 병합.
-- Supabase SQL Editor에서 이 파일만 실행합니다. 표를 지우지 않습니다.
-- 실행 뒤에 플래너가 응답의 fieldPatch 를 보고, 다음 저장부터 바뀐 칸만 보냅니다.

create or replace function public.planner_apply_mutation(
  p_key text,
  p_value jsonb,
  p_deleted boolean,
  p_base_revision integer,
  p_mutation_id text
) returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  row public.planner_entities%rowtype;
  next_rev integer;
  seq bigint;
begin
  if auth.uid() is null then
    return jsonb_build_object('status', 'error', 'message', 'login required', 'key', p_key);
  end if;
  if p_key is null or length(btrim(p_key)) = 0 then
    return jsonb_build_object('status', 'error', 'message', 'empty key');
  end if;
  if p_base_revision is null or p_base_revision < 0 then
    p_base_revision := 0;
  end if;
  if p_deleted then
    p_value := null;
  end if;

  select * into row from public.planner_entities where key = p_key for update;

  -- 바뀐 칸만 합친다. 그 칸이 서버에서 그대로면 덮고, 서버도 그 칸을 고쳤으면 그 칸만 충돌이다.
  if p_value is not null and jsonb_typeof(p_value) = 'object' and coalesce((p_value->>'_fieldPatch')::boolean, false) then
    declare
      current jsonb;
      path_text text;
      server_val jsonb;
      base_val jsonb;
      new_val jsonb;
      applied int := 0;
      conflicted int := 0;
    begin
      if not found then
        return jsonb_build_object(
          'status', 'conflict', 'key', p_key, 'mutationId', p_mutation_id,
          'revision', 0, 'value', null, 'deleted', true, 'updatedAt', null
        );
      end if;
      current := case when jsonb_typeof(row.value) = 'object' then row.value else '{}'::jsonb end;
      for path_text in select jsonb_array_elements_text(coalesce(p_value->'paths', '[]'::jsonb))
      loop
        server_val := current #> string_to_array(path_text, '.');
        base_val := p_value->'base'->path_text;
        new_val := p_value->'set'->path_text;
        if server_val is not distinct from base_val or server_val is not distinct from new_val then
          current := jsonb_set(current, string_to_array(path_text, '.'), coalesce(new_val, 'null'::jsonb), true);
          applied := applied + 1;
        else
          conflicted := conflicted + 1;
        end if;
      end loop;
      if applied = 0 then
        return jsonb_build_object(
          'status', case when conflicted > 0 then 'conflict' else 'idempotent' end,
          'key', p_key, 'mutationId', p_mutation_id, 'revision', row.revision,
          'changeSeq', row.change_seq, 'value', row.value, 'deleted', row.deleted, 'updatedAt', row.updated_at
        );
      end if;
      next_rev := row.revision + 1;
      update public.planner_entities
        set value = current,
            deleted = false,
            revision = next_rev,
            updated_at = now(),
            mutation_id = nullif(p_mutation_id, ''),
            change_seq = nextval('planner_entity_change_seq')
        where key = p_key
        returning revision, change_seq into next_rev, seq;
      return jsonb_build_object(
        'status', case when conflicted > 0 then 'conflict' else 'ok' end,
        'key', p_key, 'mutationId', p_mutation_id, 'revision', next_rev, 'changeSeq', seq,
        'value', case when conflicted > 0 then current else null end,
        'deleted', false
      );
    end;
  end if;

  if found
    and row.mutation_id is not null
    and row.mutation_id = p_mutation_id
    and length(p_mutation_id) > 0
    and row.deleted is not distinct from coalesce(p_deleted, false)
    and row.value is not distinct from p_value
  then
    return jsonb_build_object(
      'status', 'idempotent',
      'key', p_key,
      'mutationId', p_mutation_id,
      'revision', row.revision,
      'changeSeq', row.change_seq
    );
  end if;

  if found and (
    row.revision = p_base_revision
    or (row.deleted is not distinct from coalesce(p_deleted, false) and row.value is not distinct from p_value)
  ) then
    next_rev := row.revision + 1;
    update public.planner_entities
      set value = p_value,
          deleted = coalesce(p_deleted, false),
          revision = next_rev,
          updated_at = now(),
          mutation_id = nullif(p_mutation_id, ''),
          change_seq = nextval('planner_entity_change_seq')
      where key = p_key
      returning revision, change_seq into next_rev, seq;
    return jsonb_build_object(
      'status', 'ok',
      'key', p_key,
      'mutationId', p_mutation_id,
      'revision', next_rev,
      'changeSeq', seq
    );
  end if;

  if not found and p_base_revision = 0 then
    insert into public.planner_entities (key, value, revision, deleted, updated_at, mutation_id)
    values (p_key, p_value, 1, coalesce(p_deleted, false), now(), nullif(p_mutation_id, ''))
    returning revision, change_seq into next_rev, seq;
    return jsonb_build_object(
      'status', 'ok',
      'key', p_key,
      'mutationId', p_mutation_id,
      'revision', next_rev,
      'changeSeq', seq
    );
  end if;

  return jsonb_build_object(
    'status', 'conflict',
    'key', p_key,
    'mutationId', p_mutation_id,
    'revision', case when found then row.revision else 0 end,
    'value', case when found then row.value else null end,
    'deleted', case when found then row.deleted else true end,
    'updatedAt', case when found then row.updated_at else null end
  );
end;
$$;

create or replace function public.planner_apply_batch(p_rows jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  item jsonb;
  one jsonb;
  accepted jsonb := '[]'::jsonb;
  conflicts jsonb := '[]'::jsonb;
  seq bigint;
begin
  if auth.uid() is null then
    return jsonb_build_object('result', 'error', 'message', '팀 로그인이 필요합니다.');
  end if;
  if p_rows is null or jsonb_typeof(p_rows) <> 'array' then
    return jsonb_build_object('result', 'error', 'message', '항목이 없습니다.');
  end if;

  for item in select * from jsonb_array_elements(p_rows)
  loop
    one := public.planner_apply_mutation(
      item->>'key',
      case when coalesce((item->>'deleted')::boolean, false) then null else item->'value' end,
      coalesce((item->>'deleted')::boolean, false),
      coalesce((item->>'baseEntityRevision')::int, 0),
      coalesce(item->>'mutationId', '')
    );
    if one->>'status' = 'conflict' then
      conflicts := conflicts || jsonb_build_array(one);
    elsif one->>'status' = 'ok' or one->>'status' = 'idempotent' then
      accepted := accepted || jsonb_build_array(one);
    else
      return jsonb_build_object('result', 'error', 'message', coalesce(one->>'message', '저장 실패'), 'key', one->>'key');
    end if;
  end loop;

  select max(change_seq) into seq from public.planner_entities;
  return jsonb_build_object(
    'result', case when jsonb_array_length(conflicts) > 0 then 'partial' else 'success' end,
    'accepted', accepted,
    'conflicts', conflicts,
    'changeSeq', coalesce(seq, 0),
    'fieldPatch', true
  );
end;
$$;
