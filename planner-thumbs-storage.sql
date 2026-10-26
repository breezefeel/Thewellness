-- 비공개 썸네일 보관함. Supabase SQL Editor에서 이 파일 전체를 한 번 실행합니다.
-- 다시 실행해도 됩니다. 서비스 롤 키는 쓰지 않습니다.
--
-- 팀원만 읽고 쓸 수 있습니다. 기존 public.is_team_member() 를 그대로 씁니다.
-- 그 함수는 public.team_members 에 user_id = auth.uid() 인 로그인 사용자만 통과시킵니다.
-- PC 동기화 스크립트와 플래너 모두 팀 로그인(이메일/비밀번호)의 사용자 JWT로 접근합니다.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'thumbs',
  'thumbs',
  false,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']::text[]
)
on conflict (id) do update
  set public = false,
      file_size_limit = 5242880,
      allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp']::text[];

grant execute on function public.is_team_member() to authenticated;

drop policy if exists thumbs_select on storage.objects;
create policy thumbs_select
  on storage.objects
  for select
  to authenticated
  using (bucket_id = 'thumbs' and public.is_team_member());

drop policy if exists thumbs_insert on storage.objects;
create policy thumbs_insert
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'thumbs' and public.is_team_member());

drop policy if exists thumbs_update on storage.objects;
create policy thumbs_update
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'thumbs' and public.is_team_member())
  with check (bucket_id = 'thumbs' and public.is_team_member());

drop policy if exists thumbs_delete on storage.objects;
create policy thumbs_delete
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'thumbs' and public.is_team_member());

-- 한글 폴더·파일 이름은 여기 두고, 버킷 경로는 ASCII 입니다.
create table if not exists public.thumb_index (
  path text primary key,
  folder text not null default '',
  name text not null default '',
  width integer,
  height integer,
  bytes integer,
  updated_at timestamptz not null default now()
);

create index if not exists thumb_index_folder_idx
  on public.thumb_index (folder, name);

alter table public.thumb_index enable row level security;

revoke all on table public.thumb_index from public, anon;
grant select, insert, update, delete on table public.thumb_index to authenticated;

drop policy if exists thumb_index_select on public.thumb_index;
create policy thumb_index_select
  on public.thumb_index
  for select
  to authenticated
  using (public.is_team_member());

drop policy if exists thumb_index_insert on public.thumb_index;
create policy thumb_index_insert
  on public.thumb_index
  for insert
  to authenticated
  with check (public.is_team_member());

drop policy if exists thumb_index_update on public.thumb_index;
create policy thumb_index_update
  on public.thumb_index
  for update
  to authenticated
  using (public.is_team_member())
  with check (public.is_team_member());

drop policy if exists thumb_index_delete on public.thumb_index;
create policy thumb_index_delete
  on public.thumb_index
  for delete
  to authenticated
  using (public.is_team_member());
