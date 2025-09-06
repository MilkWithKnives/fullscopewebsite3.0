import Image from "next/image";

export const metadata = {
  title: "About | Full Scope Media",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-coffee-900 text-mascarpone">
      <section className="container px-4 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Photo */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <Image
              src="/about-photo.png" // ✅ Correct usage for files inside /public
              alt="About Full Scope Media"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="mb-6 text-3xl font-extrabold uppercase sm:text-4xl md:text-5xl">
              About Me
            </h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              Hi, I’m the founder of Full Scope Media. I specialize in high-end
              photography, video production, and creative storytelling. My goal
              is to bring your vision to life with visuals that are sharp,
              cinematic, and unforgettable.
            </p>
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
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