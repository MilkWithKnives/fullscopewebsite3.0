import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/15 bg-black/60">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm text-mascarpone/70">
        <div>
          <div className="inline-block border border-white/20 px-4 py-3 text-mascarpone font-black tracking-[.12em]">
            PAL<br/>MA
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Link href="/about">About</Link>
            <div><Link href="/journal">Journal</Link></div>
            <div><Link href="/contact">Contact</Link></div>
          </div>
          <div className="space-y-2">
            <Link href="/portfolio">Portfolio</Link>
            <div><Link href="/services">Services</Link></div>
            <div><Link href="/pricing">Pricing</Link></div>
          </div>
        </div>
        <div className="text-xs">© {new Date().getFullYear()} PALMA Studio — brewed dark, finished light.</div>
      </div>
    </footer>
  );
}