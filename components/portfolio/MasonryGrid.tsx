'use client';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '@/components/ui/Lightbox';

export default function MasonryGrid({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const show = (i: number) => { setIdx(i); setOpen(true); };
  const onPrev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length]);
  const onNext = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {images.map((src, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => show(i)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.03 }}
            className="mb-4 w-full rounded-md overflow-hidden border border-white/10 bg-white/[.03] shadow-[0_10px_25px_rgba(0,0,0,.25)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`photo-${i}`} className="w-full h-auto object-cover" loading="lazy" />
          </motion.button>
        ))}
      </div>

      <Lightbox
        open={open}
        images={images}
        index={idx}
        onClose={() => setOpen(false)}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
}