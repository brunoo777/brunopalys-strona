"use client";

import { motion } from "framer-motion";
import { DoodleArrow } from "./Doodles";

export function CtaButton({
  href = "/zacznijmy",
  label = "ZACZNIJMY WSPÓŁPRACĘ",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <div className="relative inline-flex">
      <DoodleArrow
        className="absolute -top-16 -left-8 hidden h-14 w-14 text-accent sm:block"
        style={{ transform: "rotate(100deg)" }}
      />
      <DoodleArrow
        className="absolute -top-16 -right-8 hidden h-14 w-14 text-accent sm:block"
        style={{ transform: "scaleX(-1) rotate(100deg)" }}
      />

      <motion.a
        href={href}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          repeatDelay: 2.2,
          ease: "easeInOut",
        }}
        className="rounded-full bg-accent px-10 py-5 text-base font-extrabold text-accent-ink shadow-[0_0_60px_-12px] shadow-accent/60 transition-transform hover:scale-105 sm:text-lg"
      >
        {label}
      </motion.a>
    </div>
  );
}
