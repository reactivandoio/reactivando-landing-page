import type { Metadata } from 'next';
import Link from 'next/link';
import WaitlistForm from './WaitlistForm';
import MobileStickyCTA from './MobileStickyCTA';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (lang === 'en') {
    return {
      title: 'Reactivando Day by AUVP | Save the date',
      description:
        'A full day to build, learn and connect with the people making tech happen in Goiás. Hackathon, keynotes, awards and happy hour — all in one day at Hub Goiás.',
      openGraph: {
        title: 'Reactivando Day by AUVP | Save the date',
        description:
          'Hackathon, keynotes, awards and happy hour on July 4th at Hub Goiás. Join the waitlist.',
      },
    };
  }
  return {
    title: 'Reactivando Day by AUVP | Save the date',
    description:
      'Um dia inteiro para construir, aprender e se conectar com quem está fazendo tecnologia acontecer em Goiás. Hackathon, palestras, premiação e happy hour — tudo no mesmo dia no Hub Goiás.',
    openGraph: {
      title: 'Reactivando Day by AUVP | Save the date',
      description:
        'Hackathon, palestras, premiação e happy hour no dia 04/07 no Hub Goiás. Entre na lista de espera.',
    },
  };
}

const COPY = {
  pt: {
    nav_about: 'Sobre',
    nav_program: 'Programação',
    nav_hackathon: 'Hackathon',
    nav_community: 'Comunidade',
    nav_location: 'Localização',
    nav_cta: 'Lista de espera',
    nav_cta_short: 'Lista',

    pill: '04 de julho · 09h às 21h · Hub Goiás',
    title_lead: 'Reactivando',
    title_accent: 'Day',
    by: 'by AUVP',
    hero_subtitle:
      'Um dia inteiro para construir, aprender e se conectar na intersecção entre tecnologia e mercado financeiro — com quem está fazendo tecnologia acontecer em Goiás.',
    hero_support:
      'Hackathon, palestras com grandes nomes da área, premiação e happy hour.\nTudo no mesmo dia.\nTudo no mesmo local.',
    cta_primary: 'Entrar na lista de espera',
    cta_micro:
      'As vagas serão limitadas. A lista de espera recebe primeiro os avisos sobre abertura das inscrições, programação e convidados.',

    pos_eyebrow: 'Sobre o evento',
    pos_title: 'Não é só um evento de tecnologia',
    pos_p1:
      'A maioria dos eventos começa e termina igual: você assiste umas palestras, tira foto, posta no LinkedIn e vai embora como se nada tivesse acontecido.',
    pos_p2: 'O Reactivando Day foi pensado para ser diferente.',
    pos_p3:
      'Você vai passar o dia em um ambiente com pessoas criando, discutindo ideias, aprendendo com gente que vive o mercado e fazendo conexões com pessoas que podem continuar com você depois do evento.',
    pos_p4:
      'E mais do que isso: participando de uma comunidade que se importa com você.',
    pos_visual_label: 'Comunidade tech · Goiás',

    aud_title: 'Para quem esse evento é feito',
    aud_lines: [
      'Para quem quer sair da plateia.',
      'Para quem está em dúvida de como criar alguma coisa e quer colocar a mão na massa.',
      'Para estudantes que querem ver na prática como uma ideia sai do papel.',
      'Para devs que querem se aproximar de gente que está vivendo o mercado.',
      'Para designers, PMs, founders e curiosos que querem entender como uma ideia vira solução.',
      'E para quem sabe que tecnologia não se aprende só em vídeo do YouTube.',
    ],

    why_title: 'Por que participar?',
    why_desc:
      'O que faz do Reactivando Day uma experiência relevante para sua carreira e sua rede.',
    why_cards: [
      {
        icon: 'construction',
        title: 'Construir algo de verdade em um dia',
        desc:
          'Nada de ficar só assistindo palestra com a bunda na cadeira o dia inteiro. A ideia é colocar a mão na massa e sair com um projeto. E se você não quiser criar, dá pra participar e ver como as coisas acontecem — vai ter muita gente por lá o dia todo, uma galera trocando ideia e participando do evento.',
      },
      {
        icon: 'school',
        title: 'Aprender com quem está no mercado',
        desc:
          'Conteúdo feito por pessoas que estão trabalhando e vivendo o mercado, indo além do básico. Conversa de quem vive o jogo, não palestra motivacional.',
      },
      {
        icon: 'groups',
        title: 'Conhecer gente boa',
        desc:
          'Devs, designers, produto, negócio — uma comunidade de verdade, com gente que se importa com você, no mesmo lugar.',
      },
      {
        icon: 'visibility',
        title: 'Ganhar visibilidade',
        desc:
          'Apresente sua solução, mostre como você pensa e se conecte com quem pode abrir portas. Quem sabe sua próxima vaga não está nesse evento.',
      },
    ],
    cta_repeat: 'Quero entrar na lista de espera',
    cta_repeat_micro: 'Vagas limitadas pela dinâmica do hackathon e estrutura do espaço.',

    schedule_title: 'O dia em três momentos',
    schedule_desc:
      'O hackathon atravessa o dia inteiro, mas cada parte tem um foco diferente.',
    act1_time: 'Manhã',
    act1_title: 'Hackathon começa',
    act1_desc:
      'Café da manhã, formação dos times, briefing do desafio (mercado financeiro), mini-palestras pra dar contexto e início da construção. Aqui a ideia sai do PowerPoint e começa a virar alguma coisa.',
    act2_time: 'Tarde',
    act2_title: 'Conteúdo com gente do mercado',
    act2_desc:
      'Almoço junto e palestras na intersecção entre tecnologia e mercado financeiro. Profissionais que vivem os dois mundos, falando de produto, IA, construção, carreira e o que muda quando o problema é dinheiro de gente de verdade. Sem palestra motivacional.',
    act3_time: 'Noite',
    act3_title: 'Entrega, premiação e happy hour',
    act3_desc:
      'Finalização dos projetos, apresentação dos times, premiação e happy hour com chope para fechar o dia. Porque networking bom não acontece em formulário. Acontece em conversa.',

    hack_eyebrow: 'Hackathon · Mercado financeiro',
    hack_title: 'Você não precisa chegar com uma ideia pronta',
    hack_p1: 'O hackathon será guiado e o tema é mercado financeiro.',
    hack_p2:
      'Os times vão receber um desafio real do universo de investimentos — vindo da AUVP, a maior escola de investimentos do Brasil — formar grupos, contar com orientação e construir uma solução ao longo do dia.',
    hack_p3: 'O foco não é só ganhar.',
    hack_p4:
      'É testar repertório, aprender rápido, trabalhar em grupo e mostrar como você pensa quando o problema é de verdade. Você não precisa ser do mercado financeiro — precisa querer entender.',
    hack_visual_label: 'Times reais, problema real',

    com_eyebrow: 'Comunidade',
    com_title: 'Quem participa não participa só de um evento.\nEntra em uma comunidade.',
    com_p1: 'O Reactivando nasceu para aproximar pessoas da tecnologia em Goiás.',
    com_p2:
      'Esse evento é mais uma peça disso: juntar estudantes, profissionais, empresas, comunidades e parceiros em um ambiente onde as coisas podem acontecer de verdade.',
    com_bullets: [
      'Uma conversa pode virar uma vaga.',
      'Um time pode virar um projeto.',
      'Uma ideia pode virar algo maior.',
    ],
    com_final: 'Mas isso só acontece quando você aparece.',

    partner_label: 'Em co-realização',
    partner_title: 'Reactivando Day by AUVP',
    partner_tagline: 'AUVP — a maior escola de investimentos do Brasil.',
    partner_p1:
      'Reactivando e AUVP se juntaram para criar um evento na intersecção de tecnologia e mercado financeiro. O foco do dia é esse cruzamento: tech que resolve problema de investidor de verdade.',
    partner_p2:
      'A Reactivando coloca a comunidade tech de Goiás dentro da sala e organiza o hackathon. A AUVP traz a visão de quem ensina investimento pra milhares de pessoas no Brasil — e os desafios vêm dessa fonte. Dois lados que se completam, em um dia só.',

    support_label: 'Com apoio de',

    form_title: 'Entre na lista de espera',
    form_subtitle:
      'Cadastre seu nome, e-mail e WhatsApp para receber em primeira mão a abertura das inscrições, os convidados confirmados e os próximos avisos do Reactivando Day.',
    form_benefits: [
      'Aviso prioritário sobre abertura das inscrições',
      'Acesso antecipado à programação e convidados',
      'Atualizações direto no WhatsApp',
    ],
    name_label: 'Nome completo',
    name_placeholder: 'Como você quer ser chamado(a)',
    email_label: 'E-mail',
    email_placeholder: 'voce@email.com',
    phone_label: 'WhatsApp',
    phone_placeholder: '(62) 9XXXX-XXXX',
    submit: 'Quero entrar na lista de espera',
    submitting: 'Salvando...',
    success_title: 'Você está na lista.',
    success_desc:
      'Agora entre no grupo de espera no WhatsApp para acompanhar os próximos avisos do Reactivando Day.',
    whatsapp_cta: 'Entrar no grupo de espera',
    disclaimer:
      'Ao entrar na lista de espera você concorda em receber atualizações sobre o Reactivando Day por e-mail e WhatsApp.',

    loc_eyebrow: 'Localização',
    how_to_get_there: 'Como chegar',
    open_in_maps: 'Abrir no Google Maps',
    presents: '× apresenta ×',
    footer_copy: '© 2026 Reactivando Day by AUVP. Tecnologia e comunidade em Goiânia.',
  },
  en: {
    nav_about: 'About',
    nav_program: 'Schedule',
    nav_hackathon: 'Hackathon',
    nav_community: 'Community',
    nav_location: 'Location',
    nav_cta: 'Waitlist',
    nav_cta_short: 'List',

    pill: 'July 4th · 9 AM – 9 PM · Hub Goiás',
    title_lead: 'Reactivando',
    title_accent: 'Day',
    by: 'by AUVP',
    hero_subtitle:
      'A full day to build, learn and connect at the intersection of tech and the financial market — with the people making tech happen in Goiás.',
    hero_support:
      'Hackathon, keynotes from big names in the field, awards and happy hour.\nAll in one day.\nAll in one place.',
    cta_primary: 'Join the waitlist',
    cta_micro:
      'Spots will be limited. The waitlist gets first notice on registration, schedule and guests.',

    pos_eyebrow: 'About the event',
    pos_title: 'Not just a tech event',
    pos_p1:
      'Most events start and end the same way: you watch a few talks, take a photo, post on LinkedIn and leave like nothing happened.',
    pos_p2: 'Reactivando Day was designed to be different.',
    pos_p3:
      'You will spend the day with people building, debating ideas, learning from folks who live the market and making connections with people who can stick with you after the event.',
    pos_p4:
      'More than that: joining a community that actually cares about you.',
    pos_visual_label: 'Tech community · Goiás',

    aud_title: 'Who this event is for',
    aud_lines: [
      'For people who want to get out of the audience.',
      'For people who are unsure how to build something and want to get hands-on.',
      'For students who want to see in practice how an idea leaves the page.',
      'For devs who want to get closer to people living the market.',
      'For designers, PMs, founders and curious minds who want to see how an idea becomes a solution.',
      'And for anyone who knows tech is not learned just watching YouTube.',
    ],

    why_title: 'Why join?',
    why_desc:
      'What makes Reactivando Day a worthwhile day for your career and your network.',
    why_cards: [
      {
        icon: 'construction',
        title: 'Build something real in a day',
        desc:
          'Not just sitting through talks for hours. Get hands-on and leave with a project. And if you do not feel like building, just show up and watch things happen — a crowd around all day, people swapping ideas and taking part.',
      },
      {
        icon: 'school',
        title: 'Learn from people in the market',
        desc:
          'Content from people who are working and living the market, going beyond the basics. Real conversation, not motivational keynotes.',
      },
      {
        icon: 'groups',
        title: 'Meet great people',
        desc:
          'Devs, designers, product, business — a real community of people who care about you, in the same room.',
      },
      {
        icon: 'visibility',
        title: 'Get visibility',
        desc:
          'Show your solution, show how you think and connect with people who can open doors. Your next job might be at this event.',
      },
    ],
    cta_repeat: 'Join the waitlist',
    cta_repeat_micro: 'Limited spots due to hackathon dynamics and venue capacity.',

    schedule_title: 'The day in three moments',
    schedule_desc: 'The hackathon runs across the whole day, but each part has its own focus.',
    act1_time: 'Morning',
    act1_title: 'Hackathon kicks off',
    act1_desc:
      'Breakfast, team formation, challenge briefing (financial market), lightning talks for context and the start of the build. This is where the idea leaves the slide deck and starts becoming something.',
    act2_time: 'Afternoon',
    act2_title: 'Content with people from the market',
    act2_desc:
      'Lunch together and keynotes at the intersection of tech and the financial market. Professionals living both worlds, talking product, AI, building, career and what changes when the problem is real people’s money. No motivational talks.',
    act3_time: 'Evening',
    act3_title: 'Delivery, awards and happy hour',
    act3_desc:
      'Project wrap-up, team presentations, awards and a happy hour with draft beer to close the day. Because good networking does not happen on a form. It happens in conversation.',

    hack_eyebrow: 'Hackathon · Financial market',
    hack_title: 'You do not need to show up with a ready-made idea',
    hack_p1: 'The hackathon will be guided and the theme is the financial market.',
    hack_p2:
      'Teams will receive a real challenge from the investing world — coming from AUVP, the largest investment school in Brazil — form groups, get mentorship and build a solution through the day.',
    hack_p3: 'Winning is not the only point.',
    hack_p4:
      'It is about stress-testing what you know, learning fast, working in a team and showing how you think when the problem is real. You do not need to be from finance — you need to want to understand it.',
    hack_visual_label: 'Real teams, real problem',

    com_eyebrow: 'Community',
    com_title: 'You are not just joining an event.\nYou are joining a community.',
    com_p1: 'Reactivando was born to bring people closer to tech in Goiás.',
    com_p2:
      'This event is another piece of that: putting students, professionals, companies, communities and partners in a room where things can actually happen.',
    com_bullets: [
      'A conversation can become a job.',
      'A team can become a project.',
      'An idea can become something bigger.',
    ],
    com_final: 'But only if you show up.',

    partner_label: 'Co-hosted by',
    partner_title: 'Reactivando Day by AUVP',
    partner_tagline: 'AUVP — the largest investment school in Brazil.',
    partner_p1:
      'Reactivando and AUVP joined forces for an event at the intersection of tech and the financial market. The whole day lives in that crossover: tech solving real investor problems.',
    partner_p2:
      'Reactivando puts the Goiás tech community in the room and runs the hackathon. AUVP brings the perspective of an organization teaching investing to thousands of people in Brazil — and the challenges come from that source. Two sides that complete each other, in one day.',

    support_label: 'With support from',

    form_title: 'Join the waitlist',
    form_subtitle:
      'Drop your name, email and WhatsApp to be first to hear about registration, confirmed guests and the next updates on Reactivando Day.',
    form_benefits: [
      'Priority notice on registration',
      'Early access to schedule and guests',
      'Updates straight to WhatsApp',
    ],
    name_label: 'Full name',
    name_placeholder: 'How should we call you',
    email_label: 'Email',
    email_placeholder: 'you@email.com',
    phone_label: 'WhatsApp',
    phone_placeholder: '+55 62 9XXXX-XXXX',
    submit: 'Join the waitlist',
    submitting: 'Saving...',
    success_title: 'You are on the list.',
    success_desc:
      'Now join the WhatsApp waitlist group to follow the next updates from Reactivando Day.',
    whatsapp_cta: 'Join the waitlist group',
    disclaimer:
      'By joining the waitlist you agree to receive updates about Reactivando Day by email and WhatsApp.',

    loc_eyebrow: 'Location',
    how_to_get_there: 'How to get there',
    open_in_maps: 'Open in Google Maps',
    presents: '× presents ×',
    footer_copy: '© 2026 Reactivando Day by AUVP. Tech and community in Goiânia.',
  },
};

export default async function ReactivandoDayPage({ params }: Props) {
  const { lang } = await params;
  const t = COPY[lang === 'en' ? 'en' : 'pt'];

  const navLinks = [
    { href: '#sobre', label: t.nav_about },
    { href: '#programacao', label: t.nav_program },
    { href: '#hackathon', label: t.nav_hackathon },
    { href: '#comunidade', label: t.nav_community },
    { href: '#localizacao', label: t.nav_location },
  ];

  return (
    <div className="relative bg-background text-on_background min-h-screen flex flex-col">
      {/* Top app bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-outline_variant/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-3 md:py-4">
          <Link
            href={`/${lang}`}
            aria-label="Reactivando"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="/reactivando-horizontal.svg"
              alt="Reactivando"
              className="h-7 md:h-8 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-sans text-sm uppercase tracking-wider text-on_surface_variant hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-primary text-on_primary font-bold text-xs md:text-sm uppercase tracking-wider hover:-translate-y-0.5 transition-all"
          >
            <span className="hidden md:inline">{t.nav_cta}</span>
            <span className="md:hidden">{t.nav_cta_short}</span>
          </a>
        </div>
      </header>

      <main className="flex-grow pt-20 md:pt-24">
        {/* ── HERO ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] bg-primary_container/20 rounded-full blur-[120px] opacity-60 rd-glow-pulse" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tertiary/10 rounded-full blur-[100px] opacity-50" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center flex flex-col items-center gap-8">
            <div className="rd-fade-up inline-flex items-center gap-2 bg-surface_container px-4 py-2 rounded-full border border-outline_variant/30 text-primary uppercase text-xs md:text-sm tracking-wider font-sans font-semibold">
              <span className="material-symbols-outlined text-base">calendar_today</span>
              {t.pill}
            </div>
            <h1 className="rd-fade-up-d1 font-display font-black tracking-tight text-on_surface text-5xl md:text-7xl lg:text-8xl text-balance leading-[1.02]">
              {t.title_lead}{' '}
              <span className="text-primary italic">{t.title_accent}</span>
            </h1>
            <div className="rd-fade-up-d1 flex items-center gap-3 -mt-2">
              <span className="text-base md:text-lg font-sans font-semibold uppercase tracking-[0.35em] text-on_surface_variant">
                by
              </span>
              <img
                src="/auvp-horizontal.png"
                alt="AUVP"
                className="h-7 md:h-9 w-auto"
              />
            </div>
            <p className="rd-fade-up-d2 text-lg md:text-2xl text-on_surface_variant max-w-3xl leading-relaxed">
              {t.hero_subtitle}
            </p>
            <p className="rd-fade-up-d2 text-base md:text-lg text-on_surface_variant/80 max-w-2xl leading-relaxed whitespace-pre-line">
              {t.hero_support}
            </p>
            <div className="rd-fade-up-d3 flex flex-col items-center gap-3 mt-4">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 bg-primary text-on_primary px-8 md:px-10 py-4 md:py-5 rounded-full font-display font-bold text-base md:text-lg uppercase tracking-wider hover:-translate-y-1 transition-all shadow-ambient hover:shadow-[0_0_40px_rgba(116,213,220,0.35)]"
              >
                {t.cta_primary}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <p className="text-sm text-on_surface_variant/80 max-w-md text-center leading-relaxed">
                {t.cta_micro}
              </p>
            </div>
          </div>
        </section>

        {/* ── SOBRE / POSICIONAMENTO ──────────────────────────── */}
        <section
          id="sobre"
          className="border-y border-outline_variant/10 bg-surface_container_low/40"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-5 rd-fade-up">
              <span className="text-xs uppercase tracking-[0.3em] text-tertiary font-bold">
                {t.pos_eyebrow}
              </span>
              <h2 className="font-display font-extrabold tracking-tight text-on_surface text-3xl md:text-5xl text-balance leading-tight">
                {t.pos_title}
              </h2>
              <p className="text-on_surface_variant text-lg leading-relaxed">{t.pos_p1}</p>
              <p className="text-on_surface text-lg leading-relaxed font-semibold">{t.pos_p2}</p>
              <p className="text-on_surface_variant text-lg leading-relaxed">{t.pos_p3}</p>
              <p className="text-primary text-lg leading-relaxed font-bold">{t.pos_p4}</p>
            </div>
            <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden border border-outline_variant/30 bg-surface_container shadow-ambient rd-tilt group">
              <img
                src="/community-photo.jpg"
                alt="Comunidade Reactivando reunida em meetup no Hub Goiás"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-background via-background/70 to-transparent">
                <span className="text-on_surface font-sans uppercase text-xs md:text-sm tracking-[0.3em] font-semibold">
                  {t.pos_visual_label}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARA QUEM ───────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="text-center mb-12 space-y-3 rd-fade-up">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-on_surface text-balance">
              {t.aud_title}
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {t.aud_lines.map((line, i) => (
              <li
                key={i}
                className={`rd-fade-up rd-tilt flex items-start gap-4 bg-surface_container_low/40 border border-outline_variant/20 rounded-2xl p-5 md:p-6 hover:border-primary/50 hover:bg-surface_container_low/70 transition-all duration-300 ${
                  i === t.aud_lines.length - 1 && t.aud_lines.length % 2 === 1
                    ? 'md:col-span-2'
                    : ''
                }`}
                style={{ animationDelay: `${0.08 * i}s` }}
              >
                <span className="material-symbols-outlined text-primary mt-0.5 transition-transform duration-300 group-hover:translate-x-1">
                  arrow_right_alt
                </span>
                <span className="text-on_surface text-base md:text-lg leading-relaxed">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── POR QUE PARTICIPAR (bento) ──────────────────────── */}
        <section className="border-y border-outline_variant/10 bg-surface_container_low/40">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 space-y-14">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-on_surface text-balance">
                {t.why_title}
              </h2>
              <p className="text-on_surface_variant text-lg leading-relaxed">{t.why_desc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.why_cards.map((c, i) => {
                const accents = [
                  'text-primary',
                  'text-tertiary',
                  'text-secondary',
                  'text-primary',
                ];
                const bg = [
                  'bg-primary/10 border-primary/30',
                  'bg-tertiary/10 border-tertiary/30',
                  'bg-secondary/10 border-secondary/30',
                  'bg-primary/10 border-primary/30',
                ];
                return (
                  <div
                    key={c.title}
                    className="rd-fade-up rd-tilt bg-surface_container rounded-2xl border border-outline_variant/30 p-8 md:p-10 flex flex-col hover:border-primary/50 hover:bg-surface_container_high transition-all duration-300 h-full"
                    style={{ animationDelay: `${0.08 * i}s` }}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl border ${bg[i]} flex items-center justify-center mb-6 shrink-0`}
                    >
                      <span
                        className={`material-symbols-outlined text-3xl ${accents[i]}`}
                      >
                        {c.icon}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-on_surface mb-3 text-balance">
                      {c.title}
                    </h3>
                    <p className="text-on_surface_variant leading-relaxed">{c.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center gap-2">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 bg-primary text-on_primary px-8 py-4 rounded-full font-display font-bold uppercase tracking-wider hover:-translate-y-1 transition-all shadow-ambient"
              >
                {t.cta_repeat}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <p className="text-sm text-on_surface_variant/80 max-w-md text-center">
                {t.cta_repeat_micro}
              </p>
            </div>
          </div>
        </section>

        {/* ── PROGRAMACAO ─────────────────────────────────────── */}
        <section
          id="programacao"
          className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 space-y-16"
        >
          <div className="max-w-3xl space-y-3 rd-fade-up">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-on_surface tracking-tight text-balance">
              {t.schedule_title}
            </h2>
            <p className="text-on_surface_variant text-lg leading-relaxed">
              {t.schedule_desc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 relative">
            <div className="hidden md:block absolute top-[5px] left-0 right-0 h-[1px] bg-outline_variant/20" />
            {[
              { time: t.act1_time, title: t.act1_title, desc: t.act1_desc, accent: true },
              { time: t.act2_time, title: t.act2_title, desc: t.act2_desc, accent: false },
              { time: t.act3_time, title: t.act3_title, desc: t.act3_desc, accent: false },
            ].map((act, i) => (
              <div
                key={i}
                className="relative pl-8 md:pl-0 md:pt-8 rd-fade-up"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="md:hidden absolute top-0 left-0 w-[1px] h-full bg-outline_variant/20" />
                <div
                  className={`absolute md:-top-1 md:left-0 left-[-5px] top-0 w-3 h-3 rounded-full ${
                    act.accent
                      ? 'bg-primary shadow-[0_0_12px_rgba(116,213,220,0.7)]'
                      : 'bg-surface_variant border border-outline_variant'
                  }`}
                />
                <span
                  className={`uppercase tracking-wider text-xs font-bold mb-2 block ${
                    act.accent ? 'text-primary' : 'text-tertiary'
                  }`}
                >
                  {act.time}
                </span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-on_surface mb-3 text-balance">
                  {act.title}
                </h3>
                <p className="text-on_surface_variant leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HACKATHON ───────────────────────────────────────── */}
        <section
          id="hackathon"
          className="border-y border-outline_variant/10 bg-surface_container_low/40"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden border border-primary/30 bg-surface_container shadow-ambient rd-tilt md:order-1 order-2 group">
              <img
                src="/hackathon-photo.jpg"
                alt="Hackathon — times trabalhando em mesas longas"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <span className="text-primary font-sans uppercase text-xs tracking-[0.3em] font-bold block mb-1">
                  Tech × Finance
                </span>
                <span className="font-display text-on_surface text-xl md:text-2xl font-extrabold leading-tight block">
                  {t.hack_visual_label}
                </span>
              </div>
            </div>
            <div className="space-y-5 md:order-2 order-1 rd-fade-up">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
                {t.hack_eyebrow}
              </span>
              <h2 className="font-display font-extrabold tracking-tight text-on_surface text-3xl md:text-5xl text-balance leading-tight">
                {t.hack_title}
              </h2>
              <p className="text-on_surface text-lg leading-relaxed font-semibold">{t.hack_p1}</p>
              <p className="text-on_surface_variant text-lg leading-relaxed">{t.hack_p2}</p>
              <p className="text-on_surface text-lg leading-relaxed font-semibold">{t.hack_p3}</p>
              <p className="text-on_surface_variant text-lg leading-relaxed">{t.hack_p4}</p>
            </div>
          </div>
        </section>

        {/* ── COMUNIDADE ──────────────────────────────────────── */}
        <section id="comunidade" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 rd-fade-up">
            <span className="text-xs uppercase tracking-[0.3em] text-tertiary font-bold">
              {t.com_eyebrow}
            </span>
            <h2 className="font-display font-extrabold tracking-tight text-on_surface text-3xl md:text-5xl text-balance leading-tight whitespace-pre-line">
              {t.com_title}
            </h2>
            <p className="text-on_surface_variant text-lg leading-relaxed max-w-3xl mx-auto">
              {t.com_p1}
            </p>
            <p className="text-on_surface_variant text-lg leading-relaxed max-w-3xl mx-auto">
              {t.com_p2}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {t.com_bullets.map((b, i) => (
                <div
                  key={i}
                  className="bg-surface_container_low/60 border border-outline_variant/20 rounded-2xl p-6 text-on_surface font-display font-semibold leading-snug"
                >
                  {b}
                </div>
              ))}
            </div>
            <p className="text-primary text-2xl md:text-3xl font-display font-bold leading-relaxed pt-2">
              {t.com_final}
            </p>
          </div>
        </section>

        {/* ── PARCERIA AUVP ───────────────────────────────────── */}
        <section className="border-y border-outline_variant/10 bg-surface_container_low/40">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <img
                src="/auvp-vertical.png"
                alt="AUVP"
                className="rd-float h-40 md:h-64 w-auto"
              />
            </div>
            <div className="space-y-5 order-1 md:order-2">
              <span className="text-xs uppercase tracking-[0.3em] text-tertiary font-bold">
                {t.partner_label}
              </span>
              <h2 className="font-display font-extrabold tracking-tight text-on_surface text-3xl md:text-5xl text-balance leading-tight">
                {t.partner_title}
              </h2>
              <p className="text-tertiary text-base md:text-lg leading-relaxed font-display font-bold">
                {t.partner_tagline}
              </p>
              <p className="text-on_surface_variant text-lg leading-relaxed">{t.partner_p1}</p>
              <p className="text-on_surface text-lg leading-relaxed font-semibold">{t.partner_p2}</p>
            </div>
          </div>
        </section>

        {/* ── APOIO ───────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="flex flex-col items-center gap-8">
            <span className="text-xs uppercase tracking-[0.35em] text-tertiary font-bold">
              {t.support_label}
            </span>
            <div className="bg-on_surface rounded-3xl px-8 md:px-14 py-8 md:py-10 shadow-ambient">
              <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
                <img
                  src="/hub-secti.png"
                  alt="Hub Goiás — SECTI"
                  className="h-14 md:h-20 w-auto hover:-translate-y-1 transition-transform duration-300"
                />
                <img
                  src="/logo-sebrae-header.svg"
                  alt="Sebrae"
                  className="h-12 md:h-16 w-auto hover:-translate-y-1 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── WAITLIST FORM ───────────────────────────────────── */}
        <section
          id="waitlist"
          className="relative border-y border-outline_variant/10 bg-surface_container_low/40 scroll-mt-20"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 rd-fade-up">
              <h2 className="font-display font-extrabold tracking-tight text-on_surface text-3xl md:text-5xl text-balance leading-tight">
                {t.form_title}
              </h2>
              <p className="text-on_surface_variant text-lg leading-relaxed max-w-lg">
                {t.form_subtitle}
              </p>
              <ul className="space-y-3 pt-2">
                {t.form_benefits.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-on_surface_variant"
                  >
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rd-fade-up-d1">
              <WaitlistForm
                copy={{
                  name_label: t.name_label,
                  name_placeholder: t.name_placeholder,
                  email_label: t.email_label,
                  email_placeholder: t.email_placeholder,
                  phone_label: t.phone_label,
                  phone_placeholder: t.phone_placeholder,
                  submit: t.submit,
                  submitting: t.submitting,
                  success_title: t.success_title,
                  success_desc: t.success_desc,
                  whatsapp_cta: t.whatsapp_cta,
                  disclaimer: t.disclaimer,
                }}
              />
            </div>
          </div>
        </section>

        {/* ── LOCALIZACAO ─────────────────────────────────────── */}
        <section
          id="localizacao"
          className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 space-y-8"
        >
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-secondary font-bold">
              {t.loc_eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-on_surface text-balance">
              Hub Goiás
            </h2>
            <p className="text-on_surface_variant text-lg">
              Rua 261, 384 — Setor Leste Universitário, Goiânia - GO
            </p>
          </div>
          <div className="rd-tilt rounded-3xl overflow-hidden border border-outline_variant/15 shadow-ambient bg-surface_container_low">
            <iframe
              title="Hub Goiás — Rua 261, 384, Setor Leste Universitário, Goiânia - GO"
              src="https://www.google.com/maps?q=Hub%20Goi%C3%A1s%20Rua%20261%20384%20Setor%20Leste%20Universit%C3%A1rio%20Goi%C3%A2nia&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] md:h-[420px] border-0"
            />
          </div>
          <div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hub+Goi%C3%A1s+Rua+261+384+Setor+Leste+Universit%C3%A1rio+Goi%C3%A2nia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-sans"
            >
              <span className="material-symbols-outlined text-base">directions</span>
              {t.open_in_maps}
            </a>
          </div>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="border-t border-outline_variant/10 bg-surface_container_lowest pb-24 md:pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 md:gap-6">
            <img
              src="/reactivando-horizontal.svg"
              alt="Reactivando"
              className="h-7 md:h-8 w-auto"
            />
            <span className="text-on_surface_variant text-[0.7rem] md:text-xs uppercase tracking-[0.4em]">
              {t.presents}
            </span>
            <img
              src="/auvp-horizontal.png"
              alt="AUVP"
              className="h-7 md:h-8 w-auto"
            />
          </div>
          <p className="text-on_surface_variant/80 text-sm text-center md:text-right">
            {t.footer_copy}
          </p>
        </div>
      </footer>

      {/* Mobile-only sticky CTA */}
      <MobileStickyCTA label={t.cta_primary} />

    </div>
  );
}
