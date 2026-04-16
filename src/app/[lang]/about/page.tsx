import { getDictionary } from '@/i18n/get-dictionary';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'pt');
  const a = dict.about;

  return (
    <div className="min-h-screen bg-background text-on_background p-8 lg:p-24 flex flex-col">
      <div className="max-w-4xl mx-auto w-full space-y-6 mt-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-on_surface text-balance tracking-tight">
            {a?.title}
          </h1>
          <p className="text-on_surface_variant mt-3 text-lg">{a?.subtitle}</p>
        </div>
        <div className="space-y-6 text-on_surface_variant text-lg leading-relaxed mt-8 bg-surface_container_low p-8 md:p-12 rounded-[2rem] border border-outline_variant/10 shadow-ambient relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px]" />

          <h2 className="text-2xl font-display font-bold text-on_surface mb-4 relative z-10">
            {a?.story_title}
          </h2>
          <p className="relative z-10">{a?.story_p1}</p>
          <p className="relative z-10">{a?.story_p2}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 mt-10 border-t border-outline_variant/10 relative z-10">
            {[
              { name: a?.founder1_name, role: a?.founder1_role, bio: a?.founder1_bio },
              { name: a?.founder2_name, role: a?.founder2_role, bio: a?.founder2_bio },
              { name: a?.founder3_name, role: a?.founder3_role, bio: a?.founder3_bio },
            ].map((f) => (
              <div key={f.name} className="flex flex-col gap-3">
                <div className="w-16 h-16 bg-surface_container_highest rounded-full border border-primary/20 flex items-center justify-center text-primary shadow-ambient">
                  <span className="material-symbols-outlined text-2xl">person</span>
                </div>
                <h3 className="text-lg font-bold font-display text-on_surface leading-tight">{f.name}</h3>
                <p className="text-xs uppercase tracking-wider text-tertiary font-bold">{f.role}</p>
                <p className="text-sm opacity-90 leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
