-- 수강생 문자 · 회원 문자/알림톡 기록. tools/sms_history_setup.py 가 실행합니다.
-- 팀 로그인(authenticated)만 읽고 쓸 수 있습니다. 연락처가 들어 있습니다.

create table if not exists public.sms_history (
  id uuid primary key default gen_random_uuid(),
  sent_at timestamptz not null default now(),
  created_by uuid default auth.uid(),
  audience text not null check (audience in ('student', 'member')),
  course text not null default '',
  label text not null default '',
  channel text not null default 'sms',
  body text not null default '',
  recipients jsonb not null default '[]'::jsonb,
  sent_count integer not null default 0,
  failed jsonb not null default '[]'::jsonb
);

create index if not exists sms_history_sent_idx on public.sms_history (sent_at desc);

alter table public.sms_history enable row level security;
drop policy if exists sms_history_team on public.sms_history;
create policy sms_history_team on public.sms_history
  for all to authenticated
  using (true)
  with check (true);
