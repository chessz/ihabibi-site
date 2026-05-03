'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-warm-200 bg-warm-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-sky-900/20"
            aria-hidden="true"
          >
            H
          </div>
          <div className="leading-tight">
            <div className="text-xs font-semibold tracking-[0.2em] text-warm-800">
              H.A.B.I.B.I
            </div>
            <div className="hidden text-[11px] text-warm-400 sm:block">Household OS</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
          <Link href="/" className="btn-ghost">
            Home
          </Link>
          <Link href="/#features" className="btn-ghost">
            Features
          </Link>
          <Link href="/#faq" className="btn-ghost">
            FAQ
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://app.ihabibi.uk/login"
            className="btn-ghost"
          >
            Sign in
          </a>
          <Link href="/#waitlist" className="btn-primary">
            Join waitlist
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-warm-600 hover:bg-warm-100 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-warm-200 bg-warm-50 px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-warm-700 hover:bg-warm-100"
            >
              Home
            </Link>
            <Link
              href="/#features"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-warm-700 hover:bg-warm-100"
            >
              Features
            </Link>
            <Link
              href="/#faq"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-warm-700 hover:bg-warm-100"
            >
              FAQ
            </Link>
            <hr className="my-2 border-warm-200" />
            <a
              href="https://app.ihabibi.uk/login"
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-warm-700 hover:bg-warm-100"
            >
              Sign in
            </a>
            <Link
              href="/#waitlist"
              onClick={() => setOpen(false)}
              className="btn-primary mt-1 w-full text-center"
            >
              Join waitlist
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}