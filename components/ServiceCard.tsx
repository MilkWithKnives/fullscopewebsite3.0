'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServiceCard({
  title, copy, img, href, delay = 0,
}: { title: string; copy: string; img: string; href: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
      className="tile grid grid-cols-[130px_1fr] md:grid-cols-[160px_1fr] gap-5 p-4 md:p-5 items-center"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt="" className="object-cover w-full rounded-md aspect-square" />
      <div>
        <div className="mb-1 eyebrow">Service</div>
        <h3 className="text-xl font-black uppercase md:text-2xl tracking-tightest">{title}</h3>
        <p className="mt-1 text-sm prose-muted md:text-base">{copy}</p>
        <Link href={href} className="mt-3 link-pill">Learn More</Link>
      </div>
    </motion.div>
  );
}