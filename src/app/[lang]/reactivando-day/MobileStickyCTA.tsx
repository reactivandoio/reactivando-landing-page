export default function MobileStickyCTA({
  label,
  targetId = 'waitlist',
}: {
  label: string;
  targetId?: string;
}) {
  return (
    <a
      href={`#${targetId}`}
      className="md:hidden fixed inset-x-3 bottom-3 z-40 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-on_primary rounded-full font-display font-bold text-sm uppercase tracking-wider shadow-[0_8px_30px_-4px_rgba(0,0,0,0.5)] active:scale-95 transition-transform"
      style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
    >
      {label}
      <span className="material-symbols-outlined text-lg">arrow_forward</span>
    </a>
  );
}
