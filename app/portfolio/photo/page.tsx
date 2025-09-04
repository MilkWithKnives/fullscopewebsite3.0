import MasonryGrid from '@/components/portfolio/MasonryGrid';

export const metadata = { title: 'Photo Portfolio — PALMA' };

const PHOTOS = Array.from({ length: 21 }).map((_, i) =>
  `https://images.unsplash.com/photo-16${String( i%9 )}05851541${50 + (i%10)}-1e47f3dd76cc?auto=format&fit=crop&w=1200&q=60&sig=${i}`
);

export default function PhotoPortfolio() {
  return (
    <main className="text-mascarpone">
      <section className="container py-14 space-y-6">
        <div className="text-[12vw] md:text-[7rem] leading-none font-black text-mascarpone/10 uppercase">Photos</div>
        <p className="prose-muted max-w-prose">Editorial-grade interiors and exteriors. Natural light, true color, meticulous composition.</p>
        <MasonryGrid images={PHOTOS} />
      </section>
    </main>
  );
}