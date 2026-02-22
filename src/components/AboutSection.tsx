import Image from "next/image";

export function AboutSection() {
  const stats = [
    { value: "15+", label: "Properties Completed" },
    { value: "20+", label: "Years in West Hartford" },
    { value: "$12M+", label: "Total Portfolio Value" },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-lg lg:h-[450px]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
              alt="Quality craftsmanship in a renovated kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Transforming Properties,
              <br />
              Building Communities
            </h2>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              Reinhard von Hollander has spent over two decades finding
              undervalued properties in West Hartford&apos;s best neighborhoods
              and transforming them into beautiful, modern homes. Every project
              reflects a commitment to quality craftsmanship, thoughtful design,
              and adding lasting value to the community.
            </p>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              From full gut renovations of historic colonials to ground-up new
              construction, each home is built with the same attention to detail
              and high standards. Our approach is simple: buy smart, build right,
              and deliver homes that families love.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-accent sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-charcoal/60 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
