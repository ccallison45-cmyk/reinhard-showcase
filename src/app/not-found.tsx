import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading text-6xl font-bold text-primary">404</h1>
        <h2 className="mt-2 font-heading text-xl text-charcoal/70">
          Property Not Found
        </h2>
        <p className="mt-3 text-charcoal/50">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/properties"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent-light"
          >
            Browse Properties
          </Link>
          <Link
            href="/"
            className="rounded-md border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
