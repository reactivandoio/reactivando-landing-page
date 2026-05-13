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
      className="lg:hidden inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-on_primary rounded-full font-display font-bold text-sm uppercase tracking-wider active:scale-95 transition-transform"
      style={{
        position: 'fixed',
        left: '12px',
        right: '12px',
        bottom: '12px',
        zIndex: 60,
        paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))',
        boxShadow: '0 8px 30px -4px rgba(0,0,0,0.5)',
      }}
    >
      {label}
      <span className="material-symbols-outlined text-lg">arrow_forward</span>
    </a>
  );
}
