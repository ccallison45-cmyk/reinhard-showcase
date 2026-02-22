import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              Reinhard von Hollander
            </h3>
            <p className="mt-2 text-sm">
              Custom homes and expert renovations in West Hartford, Connecticut.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-white text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/properties" className="text-sm hover:text-accent transition-colors">
                Properties
              </Link>
              <Link href="/contact" className="text-sm hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-white text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <p>West Hartford, CT 06107</p>
              <p>info@vonhollander.com</p>
              <p>(860) 555-0100</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} Reinhard von Hollander. Windbrook
            Homes LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
