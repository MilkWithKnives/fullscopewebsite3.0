'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

const NAV = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full h-24 p-0 m-0 overflow-hidden border-b border-white/10 bg-coffee-900/70 backdrop-blur-md">
      <div className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-0">
        {/* LEFT: burger (mobile) + Home (desktop ripple button) */}
        <div className="flex items-center gap-2 pl-2">
          {/* Mobile burger */}
          <button
            type="button"
            className="inline-flex items-center justify-center border rounded md:hidden h-9 w-9 border-white/15 text-mascarpone hover:bg-white/10"
            aria-label="Open menu"
            aria-controls="site-menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span aria-hidden>☰</span>
          </button>

          {/* Desktop Home ripple button (slightly larger) */}
          <Link
            href="/"
            className="
              relative border border-mascarpone/20 hover:border-wine duration-500
              group cursor-pointer overflow-hidden
              hidden md:flex justify-center items-center
              h-8 w-28 rounded-md bg-coffee-800
              font-extrabold uppercase text-[11px] tracking-wide text-mascarpone
            "
          >
            {/* ripple layers */}
            <div className="absolute z-0 transition-all duration-500 ease-in-out delay-150 rounded-full w-28 h-28 group-hover:scale-150 bg-coffee-900 group-hover:delay-75"></div>
            <div className="absolute z-0 w-24 h-24 transition-all duration-500 ease-in-out delay-150 rounded-full group-hover:scale-150 bg-coffee-800 group-hover:delay-100"></div>
            <div className="absolute z-0 w-20 h-20 transition-all duration-500 ease-in-out delay-150 rounded-full group-hover:scale-150 bg-coffee-700 group-hover:delay-150"></div>
            <div className="absolute z-0 w-16 h-16 transition-all duration-500 ease-in-out delay-150 rounded-full group-hover:scale-150 bg-wine group-hover:delay-200"></div>
            <div className="absolute z-0 w-12 h-12 transition-all duration-500 ease-in-out delay-150 rounded-full group-hover:scale-150 bg-mascarpone/30 group-hover:delay-300"></div>

            <span className="relative z-10">Home</span>
          </Link>
        </div>

        {/* CENTER: big logo */}
        <div className="flex items-center justify-center flex-1 h-full">
          <div className="h-full origin-center scale-[2.5] md:scale-[2.8] lg:scale-[3.0] xl:scale-[3.2]">
            <Logo className="w-auto h-full opacity-100 text-mascarpone" />
          </div>
        </div>

        {/* RIGHT: ripple nav + Book button (mobile) */}
        <div className="flex items-center justify-end gap-2 pr-2">
          <Link
            href="/book-us"
            className="md:hidden inline-block rounded-full bg-wine px-3 py-1.5 text-xs font-black text-mascarpone shadow-[0_6px_18px_rgba(143,36,50,.25)]"
          >
            Book
          </Link>

          {/* Desktop nav */}
          <nav className="items-center hidden gap-3 md:flex lg:gap-4 xl:gap-5">
            {NAV.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="
                  relative border border-mascarpone/20 hover:border-wine duration-500
                  group cursor-pointer overflow-hidden
                  h-6 w-20 rounded-md bg-coffee-800
                  flex justify-center items-center
                  font-extrabold uppercase text-[10px] tracking-wide text-mascarpone
                "
              >
                {/* ripple layers */}
                <div className="absolute z-0 w-20 h-20 transition-all duration-500 ease-in-out delay-150 rounded-full group-hover:scale-150 bg-coffee-900 group-hover:delay-75"></div>
                <div className="absolute z-0 w-16 h-16 transition-all duration-500 ease-in-out delay-150 rounded-full group-hover:scale-150 bg-coffee-800 group-hover:delay-100"></div>
                <div className="absolute z-0 w-12 h-12 transition-all duration-500 ease-in-out delay-150 rounded-full group-hover:scale-150 bg-coffee-700 group-hover:delay-150"></div>
                <div className="absolute z-0 w-10 h-10 transition-all duration-500 ease-in-out delay-150 rounded-full group-hover:scale-150 bg-wine group-hover:delay-200"></div>
                <div className="absolute z-0 w-8 h-8 transition-all duration-500 ease-in-out delay-150 rounded-full group-hover:scale-150 bg-mascarpone/30 group-hover:delay-300"></div>

                <span className="relative z-10">{i.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        id="site-menu"
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open ? "true" : "false"}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div
          className={`absolute left-0 right-0 top-0 rounded-b-2xl border-b border-white/15 bg-coffee-900/95 backdrop-blur-xl p-4 transition-transform duration-200 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Site Menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1" />
            <div className="h-10">
              <div className="h-full origin-center scale-[1.4]">
                <Logo className="w-auto h-full text-mascarpone" />
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center border rounded h-9 w-9 border-white/15 text-mascarpone hover:bg-white/10"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <nav className="grid gap-1 mt-3">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block px-3 py-3 text-sm font-black uppercase rounded text-mascarpone hover:bg-white/10"
            >
              Home
            </Link>
            {NAV.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-sm font-black uppercase rounded text-mascarpone hover:bg-white/10"
              >
                {i.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-white/15">
              <Link
                href="/book-us"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-wine px-4 py-2 font-black text-mascarpone shadow-[0_6px_18px_rgba(143,36,50,.25)]"
              >
                Book Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}