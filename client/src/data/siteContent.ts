// Editorial Signal style: content remains separate from the black editorial presentation layer.

export type MediaAsset = { src: string; alt: string; aspect?: 'landscape' | 'portrait' | 'square' };
export type NavigationItem = { label: string; index: string; href: string };
export type Project = { id: string; index: string; title: string; category: string; year: string; image: MediaAsset; slug: string; description: string };
export type Service = { index: string; title: string; subtitle: string; description: string; image: MediaAsset };
export type Plan = { name: string; description: string; price: string; features: string[] };
export type FaqItem = { question: string; answer: string };
export type Stat = { value: string; label: string; description: string };
export type TeamMember = { name: string; role: string; image: MediaAsset };
export type PageSeo = { title: string; description: string; canonical?: string };

export const media = {
  hero: { src: '/manus-storage/otr-hero_fa8b9562.jpg', alt: 'Model in black tailoring inside a sunlit concrete gallery', aspect: 'landscape' as const },
  portfolio01: { src: '/manus-storage/otr-portfolio-01_91e01778.jpg', alt: 'Portrait in a cobalt-blue studio', aspect: 'landscape' as const },
  portfolio02: { src: '/manus-storage/otr-portfolio-02_746c7775.jpg', alt: 'Woman seated on a concrete staircase', aspect: 'portrait' as const },
  service: { src: '/manus-storage/otr-service_eb05b557.jpg', alt: 'Orange acrylic and brushed metal still life', aspect: 'square' as const },
  mark: '/manus-storage/otr-mark_78936af2.png',
};

export const siteSettings = {
  name: 'On The Radar',
  email: 'hello@ontheradar.studio',
  year: '2026',
  tagline: 'Make the signal impossible to miss.',
};

export const navigation: NavigationItem[] = [
  { label: 'Home', index: '01', href: '/' },
  { label: 'Portfolio', index: '02', href: '/work/portfolio' },
  { label: 'About', index: '03', href: '/about' },
  { label: 'Contact', index: '04', href: '/contact' },
];

export const projects: Project[] = [
  { id: 'vellfire', index: '01', title: 'Vellfire Calibration', category: 'Art Direction', year: '2026', slug: 'vellfire-calibration', image: media.portfolio01, description: 'A visual system calibrated for a brand moving at the speed of culture.' },
  { id: 'dunwill', index: '02', title: 'Dunwill Lanson', category: 'Photography', year: '2025', slug: 'dunwill-lanson', image: media.portfolio02, description: 'A portrait language built from restraint, shadow, and a little friction.' },
  { id: 'noara', index: '03', title: 'Noara Willis', category: 'Strategy', year: '2025', slug: 'noara-willis', image: media.hero, description: 'Positioning and identity direction for a new kind of independent voice.' },
  { id: 'nike', index: '04', title: 'Nike Studios', category: 'Art Direction', year: '2024', slug: 'nike-studios', image: media.service, description: 'A kinetic visual toolkit for studios that refuse to stand still.' },
];

export const services: Service[] = [
  { index: '01', title: 'Art Direction', subtitle: 'Creative Oversight', description: 'Guiding visual identity through clarity and intentional design. We shape cohesive narratives that elevate brands beyond aesthetics.', image: media.service },
  { index: '02', title: 'Photography', subtitle: 'Brand Imaging', description: 'Crafting imagery with mood, precision, and emotional depth. We capture moments that feel curated and purposeful.', image: media.portfolio02 },
  { index: '03', title: 'Strategy', subtitle: 'Concept Frameworks', description: 'Structuring ideas with insight, direction, and clarity. We build frameworks that define positioning and move brands forward.', image: media.hero },
];

export const plans: Plan[] = [
  { name: 'Starter', description: 'Essential design support for new brands taking the first step.', price: '999', features: ['Custom-crafted visual identity', 'Responsive, modern website design', 'High-quality imagery and production'] },
  { name: 'Professional', description: 'Ideal for brands seeking refined systems and digital presence.', price: '7,299', features: ['Custom-crafted visual identity', 'Responsive, modern website design', 'Structured layouts with clean typography', 'Conversion-focused page strategy', 'Fast, optimized performance setup'] },
  { name: 'Elite', description: 'High-touch and fully crafted brand experience by On The Radar.', price: '10,999', features: ['Everything in Professional', 'Seamless CMS and organization', 'Dedicated support for revisions', 'Quarterly creative direction'] },
];

export const faqs: FaqItem[] = [
  { question: 'What distinguishes us from other agencies?', answer: 'We pair a sharp point of view with systems that are built to keep working after the launch moment.' },
  { question: 'Why not hire an in-house designer or freelancer?', answer: 'We bring a complete senior creative system without the overhead of building one from scratch.' },
  { question: 'Are creative requests truly unlimited?', answer: 'Our plans are built around an active queue and clear weekly rhythm, so quality stays ahead of volume.' },
  { question: 'How fast will I receive my work?', answer: 'Most focused requests move from brief to first direction within two to five working days.' },
  { question: 'What if I have a single project?', answer: 'Start with a focused sprint. We will scope the smallest useful system and make the next move clear.' },
];

export const stats: Stat[] = [
  { value: '2.06M', label: 'Global Impressions', description: 'Refined systems that shape digital presence.' },
  { value: '160K', label: 'Community Reach', description: 'Experiences that extend beyond visual form.' },
  { value: '750+', label: 'Creative Hours Logged', description: 'Ideas transformed into cohesive narratives.' },
  { value: '257+', label: 'Projects Completed', description: 'Functional design with a point of view.' },
];

export const team: TeamMember[] = [
  { name: 'Ariana Voss', role: 'Creative Director', image: media.hero },
  { name: 'Mira Leone', role: 'Brand Designer', image: media.portfolio02 },
  { name: 'Selena Hart', role: 'UX Strategist', image: media.portfolio01 },
];

export const seo: Record<string, PageSeo> = {
  home: { title: 'On The Radar — Creative direction with a point of view', description: 'On The Radar shapes brands through art direction, photography, and strategy.' },
  about: { title: 'About — On The Radar', description: 'Meet the studio, process, and people behind On The Radar.' },
  portfolio: { title: 'Portfolio — On The Radar', description: 'A curated collection of visual systems, identities, and brand worlds.' },
  contact: { title: 'Contact — On The Radar', description: 'Pick a direction, submit a brief, and make the signal impossible to miss.' },
};
