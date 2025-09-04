'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({
  open, images, index, onClose, onPrev, onNext,
}: {
  open: boolean;
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <button aria-label="Close" onClick={onClose}
            className="absolute top-4 right-4 text-mascarpone/80 hover:text-mascarpone text-2xl">×</button>

          <button onClick={onPrev} aria-label="Prev"
            className="absolute left-2 md:left-6 text-mascarpone/80 hover:text-mascarpone text-3xl">‹</button>

          <button onClick={onNext} aria-label="Next"
            className="absolute right-2 md:right-6 text-mascarpone/80 hover:text-mascarpone text-3xl">›</button>

          <motion.img
            key={images[index]}
            src={images[index]}
            alt=""
            className="max-h-[84vh] max-w-[92vw] rounded-lg border border-white/20 object-contain"
            initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .25 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}