'use client';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '@/components/ui/Lightbox';

export default function AngledGallery({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const onPrev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length]);
  const onNext = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length]);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => {
          const rotate = (i % 3 === 0) ? -3 : (i % 3 === 1) ? 2.5 : -1.5;
          return (
            <motion.button
              key={i}
              type="button"
              onClick={() => { setIdx(i); setOpen(true); }}
              className="relative rounded-lg overflow-hidden border border-white/10 bg-white/[.03] shadow-[0_15px_30px_rgba(0,0,0,.25)]"
              initial={{ opacity: 0, y: 18, rotate: rotate * 0.6 }}
              whileInView={{ opacity: 1, y: 0, rotate }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ rotate: 0, y: -4 }}
            >
              <img src={src} alt={`drone-${i}`} className="w-full h-full object-cover" loading="lazy" />
            </motion.button>
          );
        })}
      </div>

      <Lightbox open={open} images={images} index={idx}
        onClose={() => setOpen(false)} onPrev={onPrev} onNext={onNext} />
    </>
  );
}