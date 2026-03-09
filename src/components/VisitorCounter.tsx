'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

function getVisitorId(): string {
  const key = 'dalcomm_visitor_id';
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function VisitorCounter() {
  const [today, setToday] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const track = async () => {
      const visitorId = getVisitorId();
      const todayStr = getToday();

      // 오늘 방문 기록 (중복 무시)
      await supabase
        .from('page_views')
        .upsert(
          { visited_at: todayStr, visitor_id: visitorId },
          { onConflict: 'visited_at,visitor_id' }
        );

      // 현재 접속 기록 (5분 기준)
      await supabase
        .from('active_sessions')
        .upsert(
          { visitor_id: visitorId, last_active: new Date().toISOString() },
          { onConflict: 'visitor_id' }
        );

      // 오늘 방문자 수
      const { count: todayCount } = await supabase
        .from('page_views')
        .select('*', { count: 'exact', head: true })
        .eq('visited_at', todayStr);

      // 누적 방문자 수
      const { count: totalCount } = await supabase
        .from('page_views')
        .select('*', { count: 'exact', head: true });

      // 현재 접속자 수 (5분 이내 활동)
      const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
      const { count: currentCount } = await supabase
        .from('active_sessions')
        .select('*', { count: 'exact', head: true })
        .gte('last_active', fiveMinAgo);

      setToday(todayCount ?? 0);
      setTotal(totalCount ?? 0);
      setCurrent(currentCount ?? 0);
    };

    track();

    // 1분마다 현재 접속 갱신
    const interval = setInterval(async () => {
      const visitorId = getVisitorId();
      await supabase
        .from('active_sessions')
        .upsert(
          { visitor_id: visitorId, last_active: new Date().toISOString() },
          { onConflict: 'visitor_id' }
        );

      const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
      const { count: currentCount } = await supabase
        .from('active_sessions')
        .select('*', { count: 'exact', head: true })
        .gte('last_active', fiveMinAgo);
      setCurrent(currentCount ?? 0);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (today === null || total === null || current === null) return null;

  return (
    <div className="flex items-center gap-4 text-[11px] text-slate-500">
      <span className="flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[14px] text-slate-500">calendar_today</span>
        오늘 <strong className="text-slate-400">{today}</strong>
      </span>
      <span className="w-px h-3 bg-slate-700" />
      <span className="flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[14px] text-slate-500">group</span>
        전체 <strong className="text-slate-400">{total.toLocaleString()}</strong>
      </span>
      <span className="w-px h-3 bg-slate-700" />
      <span className="flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[14px] text-slate-500">person</span>
        현재 <strong className="text-slate-400">{current}</strong>
      </span>
    </div>
  );
}
