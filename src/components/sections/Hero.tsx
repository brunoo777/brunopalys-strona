import Link from "next/link";

export function Hero() {
  return (
    <section className="px-6 pt-32 pb-4 sm:pt-40">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-display text-6xl leading-[0.92] sm:text-7xl md:text-8xl">
          OGARNIAM
          <br />
          <span className="text-accent">ROLKI</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-muted sm:text-xl">
          Scenariusz, nagranie i montaż rolek dla firm. Od pomysłu do gotowego
          filmu — wszystko w jednych rękach.
        </p>

        <Link
          href="/zacznijmy"
          className="mt-10 inline-block rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-ink transition-opacity hover:opacity-90"
        >
          ZACZNIJMY WSPÓŁPRACĘ
        </Link>
      </div>
    </section>
  );
}
