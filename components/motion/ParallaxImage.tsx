// components/motion/ParallaxImage.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']); // gentle drift

  return (
    <div ref={ref} className="relative overflow-hidden rounded-lg border border-white/15">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img src={src} alt={alt} className="w-full h-full object-cover" style={{ y }} />
    </div>
  );
}