'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

/**
 * Spotlight/Beam social button.
 * - Dim & neutral at rest
 * - Brand glow on hover (white for X/GitHub, brand color for others)
 * - CSS styles live in `app/globals.css`
 */
export default function SocialBeam({
  href,
  label,
  variant,
  icon,
  className = '',
}: {
  href: string;
  label: string;
  variant:
    | 'instagram'
    | 'facebook'
    | 'linkedin'
    | 'youtube'
    | 'x'
    | 'github'
    | 'discord'
    | 'reddit';
  icon: ReactNode;
  className?: string;
}) {
  return (
    <div className={`sb ${className}`}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`bt sb--${variant}`}
      >
        {/* Spotlight cone */}
        <div className="light-holder" aria-hidden="true">
          <div className="dot" />
          <div className="light" />
        </div>

        {/* Icon chip + label */}
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