"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useInView,
  useScroll,
  useTransform,
  animate,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

type Tag = "div" | "h1" | "h2" | "h3" | "p" | "span" | "li" | "ul" | "section" | "a";

function m(as: Tag) {
  return (motion as unknown as Record<Tag, typeof motion.div>)[as] ?? motion.div;
}

/* Reveal — egyszeri belépő görgetésre */
export function Reveal({
  children,
  as = "div",
  y = 26,
  delay = 0,
  duration = 0.9,
  amount = 0.2,
  className,
}: {
  children: ReactNode;
  as?: Tag;
  y?: number;
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const M = m(as);
  if (reduce) return <M className={className}>{children}</M>;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

/* Stagger — sorban belépő lista/rács */
export function Stagger({
  children,
  as = "div",
  stagger = 0.08,
  delayChildren = 0.05,
  amount = 0.2,
  className,
}: {
  children: ReactNode;
  as?: Tag;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  className?: string;
}) {
  const M = m(as);
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </M>
  );
}

export function StaggerItem({
  children,
  as = "div",
  y = 24,
  className,
}: {
  children: ReactNode;
  as?: Tag;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const M = m(as);
  const variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
      };
  return (
    <M className={className} variants={variants}>
      {children}
    </M>
  );
}

/* MagneticButton — kurzorkövető CTA, spring vissza */
export function Magnetic({
  children,
  strength = 0.3,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.5 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduce ? undefined : { x: sx, y: sy, display: "inline-block" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

/* Counter — felszámol, amikor láthatóvá válik */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }
    const c = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, value, reduce, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

/* Parallax — finom mélység görgetésre */
export function Parallax({
  children,
  distance = 40,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(yRaw, { stiffness: 120, damping: 30, mass: 0.4 });

  if (reduce)
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
