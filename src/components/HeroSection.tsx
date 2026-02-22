import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop"
        alt="Beautiful custom-built home in West Hartford"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Building West Hartford&apos;s Future,
          <br />
          <span className="text-accent">One Home at a Time</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/80">
          Custom new construction and expert renovations in Connecticut&apos;s
          most desirable neighborhoods. Quality craftsmanship from concept to
          completion.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/properties"
            className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent-light"
          >
            View Our Properties
          </Link>
          <Link
            href="/contact"
            className="rounded-md border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
