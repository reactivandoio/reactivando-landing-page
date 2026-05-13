'use client';

import { useEffect, useState } from 'react';

export default function MobileStickyCTA({
  label,
  targetId = 'waitlist',
}: {
  label: string;
  targetId?: string;
}) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const io = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, [targetId]);

  return (
    <a
      href={`#${targetId}`}
      className={`md:hidden fixed inset-x-3 bottom-3 z-40 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-on_primary rounded-full font-display font-bold text-sm uppercase tracking-wider shadow-[0_8px_30px_-4px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-300 ${
        hidden ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
      style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
      aria-hidden={hidden}
    >
      {label}
      <span className="material-symbols-outlined text-lg">arrow_forward</span>
    </a>
  );
}
