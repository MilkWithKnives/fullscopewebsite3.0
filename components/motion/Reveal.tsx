// components/motion/Reveal.tsx
'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Reveal({
  children,
  delay = 0,
  className = '',
}: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}