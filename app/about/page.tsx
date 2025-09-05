import Image from "next/image";

export const metadata = {
  title: "About | Full Scope Media",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-coffee-900 text-mascarpone">
      <section className="container py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Photo */}
          <div className="relative h-[500px] w-full">
            <Image
              src="/about-photo.png"   // ✅ path is relative to /public
              alt="About Full Scope Media"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-4xl font-extrabold uppercase md:text-5xl">
              About Me
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              Hi, I’m the founder of Full Scope Media. I specialize in high-end
              photography, video production, and creative storytelling. My goal
              is to bring your vision to life with visuals that are sharp,
              cinematic, and unforgettable.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Whether it’s capturing a property, building a brand identity, or
              creating stunning content, I bring both technical expertise and a
              creative edge to every project.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}