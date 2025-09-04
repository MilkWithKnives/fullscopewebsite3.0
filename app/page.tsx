export default function HomePage() {
  return (
    <main className="min-h-screen bg-coffee-1000 text-mascarpone">
      <section className="container py-20 grid md:grid-cols-[1.25fr_1fr] gap-10 items-center">
        {/* Left: hero image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
          alt="Modern hillside home at dusk"
          className="w-full h-full object-cover rounded-lg border border-white/15"
        />
        {/* Right: copy */}
        <div>
          <div className="text-xs uppercase tracking-[.18em] text-wine font-black mb-2">Passionate</div>
          <h1 className="text-4xl md:text-5xl font-black uppercase leading-tight">
            About taking your brand to the next level.
          </h1>
          <p className="prose-muted mt-3">
            Palma is a quality-driven real estate media studio dedicated to highlighting your listing
            through visually captivating imagery that’s unique to every space.
          </p>
          <p className="prose-muted">Photography • Video • Aerial • Floor Plans • Virtual Staging</p>
          <a
            href="/book-us"
            className="mt-4 inline-block rounded-full bg-wine px-6 py-3 font-black text-mascarpone shadow-[0_6px_18px_rgba(143,36,50,.25)] hover:bg-wine-700"
          >
            Book Us
          </a>
        </div>
      </section>

<p className="prose-muted mt-4 text-lg">
  Passionate about taking your brand to the next level. <br />
  <span className="font-black text-wine">
    Floor plans included with every interior package.
  </span>
</p>
      {/* Statement band */}
      <section className="bg-coffee-800 border-y border-white/15">
        <div className="container py-10">
          <h2 className="text-2xl md:text-3xl font-black uppercase">
            Dedicated to <i className="font-serif noitalic">capturing</i> your vision,
            elevating your brand, and <span className="text-wine">increasing</span> your sales.
          </h2>
        </div>
      </section>
    </main>
  );
}