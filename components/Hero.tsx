"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(orb1.current, { x: 50, y: -30, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(orb2.current, { x: -40, y: 50, duration: 11, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24">
      <div ref={orb1} className="orb w-[700px] h-[700px] bg-brand/15 top-[-200px] right-[-300px]" />
      <div ref={orb2} className="orb w-[400px] h-[400px] bg-gold/8 bottom-[-80px] left-[-80px]" />
      <div className="orb w-[300px] h-[300px] bg-brand/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(240,165,0,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(240,165,0,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 glass-card px-5 py-2.5 rounded-full mb-8 text-xs text-white/70 mx-auto text-center"
      >
        <span className="flex items-center gap-1 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible maintenant
        </span>
        <span className="hidden sm:block w-px h-3 bg-white/20" />
        <span>Télécharge l&apos;app gratuitement</span>
      </motion.div>

      {/* Main headline */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-4xl relative z-10"
      >
        <div className="overflow-hidden mb-4">
          <motion.p variants={item} className="text-sm font-medium tracking-[0.3em] text-gold/80 uppercase mb-6">
            ta soirée commence maintenant
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1 variants={item}>
            <Image
              src="/logo-colpi2.png"
              alt="COLPI"
              width={900}
              height={270}
              className="w-[clamp(260px,65vw,680px)] h-auto mx-auto"
              style={{ mixBlendMode: "screen" }}
              priority
            />
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-2 mb-8">
          <motion.p variants={item} className="text-white/40 text-sm tracking-widest">
            by{" "}
            <a
              href="https://fomau.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block opacity-60 hover:opacity-90 transition-opacity duration-200"
            >
              <Image src="/logo-fomau.png" alt="fomau" width={100} height={30} className="h-[4.2rem] w-auto inline-block" style={{ mixBlendMode: "screen", verticalAlign: "middle" }} />
            </a>
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.p
            variants={item}
            className="text-[clamp(1rem,2.5vw,1.3rem)] text-white/50 max-w-xl mx-auto leading-relaxed font-light"
          >
            Des jeux qui <span className="text-white/80">pimentent</span> tes soirées.
            Des débats, des défis, des fous rires : tout dans ton téléphone.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <a
            href="https://apps.apple.com/fr/app/colpi/id6755601727"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn-gold text-white font-semibold px-8 py-4 rounded-2xl text-base flex items-center justify-center gap-3 w-[200px] hover:scale-105 transition-transform"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.colpi"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn-light font-semibold px-8 py-4 rounded-2xl text-base flex items-center justify-center gap-3 w-[200px] hover:scale-105 transition-transform"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M3.18 23.76c.31.17.66.22 1.01.14l12.2-7.04-2.72-2.72-10.49 9.62zm-1.14-20.5C2.02 3.56 2 3.88 2 4.2v15.6c0 .32.02.64.04.94l10.12-10.12-10.12-10.36zM20.55 10.3l-2.68-1.55-3.1 3.1 3.1 3.1 2.72-1.57c.78-.45.78-1.63-.04-2.08zM4.19.1C3.84.02 3.49.07 3.18.24L13.7 10.76l2.72-2.72L4.19.1z"/>
            </svg>
            Google Play
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
