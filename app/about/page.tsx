// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import RippleButton from '@/components/ui/RippleButton';

// Static import = automatic blur placeholder + hashed filenames
import aboutPhoto from '@/public/images/about/about-photo.jpg';

export const metadata = {
  title: 'About | Full Scope Media',
  description:
    'Luxury real estate photo + video. Coffee-dark aesthetic with bright mascarpone highlights.',
};

export default function AboutPage() {
  return (
    <main className="container py-10 md:py-14">
      {/* HERO TITLE */}
      <h1 className="text-[56px] md:text-8xl leading-none font-black tracking-tight text-mascarpone/90">
        ABOUT
      </h1>

      {/* INTRO: portrait + copy */}
      <section className="mt-8 grid gap-6 md:grid-cols-[1.1fr_1fr] md:gap-10">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[.02] aspect-[4/3] md:aspect-[5/4]">
          <Image
            src={aboutPhoto}
            alt="Ryan — Full Scope Media"
            fill
            className="object-cover"
            // static import gives blurDataURL automatically
            placeholder="blur"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="grid content-center gap-4">
          <h2 className="text-xl font-extrabold text-mascarpone">
            I’m Ryan. I capture property so buyers feel it before they visit.
          </h2>
          <p className="prose-muted">
            Full Scope is a quality-driven real estate media studio. My style leans dark-coffee with
            bright mascarpone highlights—clean lines, accurate color, and motion that sells.
          </p>
          <p className="prose-muted">
            Services include photography, video, aerial drone, <b>virtual staging</b>,{' '}
            <b>3D tours</b> (Zillow 3D &amp; Matterport), <b>AI video walkthroughs</b>, and both{' '}
            <b>2D &amp; 3D floor plans</b>. <span className="font-semibold text-mascarpone">
            2D Floor Plan included in every Interior package.</span>
          </p>
          <div className="mt-2">
            <RippleButton href="/book-us" size="lg" className="w-40 md:w-48">
              Inquire
            </RippleButton>
          </div>
        </div>
      </section>

      {/* TWO ACCENT IMAGES */}
      <section className="grid gap-4 mt-10 md:mt-14 md:grid-cols-2">
        <figure className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[.02] aspect-[4/3]">
          <Image
            src="/images/about/exterior-1.jpg"
            alt="Exterior — dusk"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </figure>
        <figure className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[.02] aspect-[4/3]">
          <Image
            src="/images/about/exterior-2.jpg"
            alt="Backyard + outbuilding"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </figure>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-12">
        <div className="my-6 border-t border-white/10" />
        <h3 className="text-3xl font-black tracking-tight text-center md:text-5xl text-mascarpone/90">
          WORK WITH ME
        </h3>
        <p className="mt-3 text-center prose-muted">
          Ready to elevate your listing? Book a shoot and I’ll handle the rest.
        </p>
        <div className="flex justify-center mt-5">
          <RippleButton href="/book-us" size="lg" className="w-40 md:w-48">
            Book Now
          </RippleButton>
        </div>
        <div className="my-6 border-t border-white/10" />
      </section>
    </main>
  );
}