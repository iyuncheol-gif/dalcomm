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

      // 오늘 방문자 수
      const { count: todayCount } = await supabase
        .from('page_views')
        .select('*', { count: 'exact', head: true })
        .eq('visited_at', todayStr);

      // 누적 방문자 수
      const { count: totalCount } = await supabase
        .from('page_views')
        .select('*', { count: 'exact', head: true });

      setToday(todayCount ?? 0);
      setTotal(totalCount ?? 0);
    };

    track();
  }, []);

  if (today === null || total === null) return null;

  return (
    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
      <span className="flex items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        오늘 <strong className="text-slate-700 dark:text-slate-300">{today}</strong>
      </span>
      <span className="w-px h-3 bg-slate-300 dark:bg-slate-600" />
      <span>
        전체 <strong className="text-slate-700 dark:text-slate-300">{total.toLocaleString()}</strong>
      </span>
    </div>
  );
}
