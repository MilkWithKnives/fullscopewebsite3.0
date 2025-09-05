'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

type Variant =
  | 'instagram'
  | 'facebook'
  | 'linkedin'
  | 'youtube'
  | 'x'
  | 'github'
  | 'discord'
  | 'reddit';

type SocialBeamProps = {
  href: string;
  label: string;          // accessible label + small text under icon
  variant: Variant;       // controls colors
  icon: ReactNode;        // the glyph SVG
  className?: string;     // optional sizing override
};

export default function SocialBeam({
  href,
  label,
  variant,
  icon,
  className = '',
}: SocialBeamProps) {
  return (
    <div className={`sb light-button ${className}`}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`bt sb--${variant}`}
      >
        {/* spotlight cone */}
        <div className="light-holder" aria-hidden="true">
          <div className="dot" />
          <div className="light" />
        </div>

        {/* icon chip + label */}
        <div className="button-holder">
          <div className="sb-icon" aria-hidden="true">
            {icon}
          </div>
          <p className="sb-text">{label}</p>
        </div>
      </Link>
    </div>
  );
}