import ServiceLayout from '@/components/services/ServiceLayout';
import { CubiCasaPreferredBadge, Included2DFloorPlanBadge } from '@/components/services/Badges';

export const metadata = { title: 'Floor Plans — PALMA' };

export default function FloorPlansService() {
  return (
    <ServiceLayout
      title="Floor Plans"
      subtitle="Accurate 2D & 3D floor plans built with CubiCasa. Clean, branded, and MLS-ready."
      heroImage={{ src: 'https://images.unsplash.com/photo-1554995208-5196c2dcbf19?auto=format&fit=crop&w=1600&q=60', alt: 'Floor plans' }}
      features={[
        { title: '2D Included', desc: '2D Floor Plan included in every interior photography package.' },
        { title: '3D Add-on', desc: '3D plan with finishes and material hints for premium listings.' },
        { title: 'Branding', desc: 'Your logo/colors and clear room labels.' },
      ]}
      gallery={[
        { src:'https://images.unsplash.com/photo-1600585154154-1e47f3dd76cc?auto=format&fit=crop&w=1200&q=60' },
        { src:'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=60' },
        { src:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=60' },
        { src:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=60' },
      ]}
      badge={
        <div className="flex flex-col items-end gap-2">
          <Included2DFloorPlanBadge />
          <CubiCasaPreferredBadge />
        </div>
      }
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-md border border-white/15 bg-white/[.03] p-5">
          <div className="font-black uppercase">2D Floor Plans</div>
          <p className="prose-muted mt-1 text-sm">
            Clean line drawings with room dimensions. Included at no extra cost with interior photo packages.
          </p>
        </div>
        <div className="rounded-md border border-white/15 bg-white/[.03] p-5">
          <div className="font-black uppercase">3D Floor Plans</div>
          <p className="prose-muted mt-1 text-sm">
            Add volume and finishes for better spatial understanding. Great for luxury listings and new builds.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}