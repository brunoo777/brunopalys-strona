"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { DoodleArrow, DoodleLike } from "../ui/Doodles";

const STATS = [
  { value: "24-48h", label: "standardowy czas realizacji" },
  { value: "Bez limitu", label: "poprawek do akceptacji" },
  { value: "PROFESJONA­LNY LOOK", label: "Montaż nastawiony na reklamę, nie na efekciarstwo" },
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = 0;
      video.play().catch(() => {});
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="o-mnie"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="glow-blob pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet/40" />
      <div className="glow-blob pointer-events-none absolute top-20 -right-32 h-96 w-96 rounded-full bg-blue/30" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted"
          >
            Dla Firm · agencji marketingowych · Meta Ads
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-display text-6xl leading-[0.92] sm:text-7xl md:text-8xl"
          >
            OGARNIAM
            <br />
             <span className="text-accent">ROLKI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg font-semibold text-ink"
          >
            
          </motion.p>

          

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mt-12 inline-flex"
          >
            <DoodleArrow
              className="absolute -top-16 -left-8 hidden h-14 w-14 text-accent sm:block"
              style={{ transform: "rotate(100deg)" }}
            />
            <DoodleArrow
              className="absolute -top-16 -right-8 hidden h-14 w-14 text-accent sm:block"
              style={{ transform: "scaleX(-1) rotate(100deg)" }}
            />

            <motion.a
              href="/zacznijmy"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: "easeInOut",
              }}
              className="rounded-full bg-accent px-10 py-5 text-base font-extrabold text-accent-ink shadow-[0_0_60px_-12px] shadow-accent/60 transition-transform hover:scale-105 sm:text-lg"
            >
              ZACZNIJMY WSPÓŁPRACĘ
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <div className="text-display break-words text-2xl text-accent sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <DoodleLike className="doodle-spin absolute -top-10 -right-8 h-16 w-16 text-accent" />
          <DoodleArrow className="absolute -bottom-12 -left-10 h-20 w-20 text-violet" />

          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="aspect-square h-auto w-full"
          >
            <source src="/videos/hero-avatar.webm" type="video/webm" />
            <source src="/videos/hero-avatar.mov" type="video/quicktime" />
          </video>

        </motion.div>
      </div>
      
    </section>
  );
}
