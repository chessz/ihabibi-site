'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import { APP_ORIGIN } from '@/lib/pricing-plans';

const LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/#day', label: 'A day' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-nav">
      <div className="wrap nav-row">
        <Link href="/" className="brand-link" aria-label="Habibi — life admin for the UK" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="nav-links" aria-label="Main">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-right">
          <a className="btn btn-ghost-dark signin" href={`${APP_ORIGIN}/login`}>
            Sign in
          </a>
          <a className="btn btn-teal" href={`${APP_ORIGIN}/register`}>
            Start free
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div className="wrap nav-drawer" id="mobile-nav">
          <nav aria-label="Mobile">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a href={`${APP_ORIGIN}/login`}>Sign in</a>
            <a className="btn btn-teal" href={`${APP_ORIGIN}/register`}>
              Start free
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
