-- 2026-10-26 동기화 수정. Supabase SQL Editor에서 이 파일 전체를 한 번 실행합니다.
-- 앱은 이 SQL을 돌리기 전에도 멈춘 대기열을 비웁니다.
-- 같은 mutation id라도 내용이 다르면 더 이상 무시하지 않고, 개정 번호 검사로 넘어갑니다.
-- 키셋 페이지는 클라이언트 조회라 이 파일에 SQL이 필요 없습니다.
-- planner_apply_batch는 이 함수를 호출하므로 배치 함수는 바꾸지 않습니다.

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
