'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-warm-200 bg-warm-50/90 shadow-sm shadow-black/[0.03] backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3.5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="H.A.B.I.B.I logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg"
            priority
          />
          <div className="leading-tight">
            <div className="text-[11px] font-semibold tracking-[0.22em] text-warm-800">
              H.A.B.I.B.I
            </div>
            <div className="hidden text-[10px] font-medium text-warm-400 sm:block">
              Household OS
            </div>
          </div>
        </Link>

          {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          <Link href="/" className="btn-ghost">
            Home
          </Link>
          <Link href="/#what-it-tracks" className="btn-ghost">
            Features
          </Link>
          <Link href="/#roi" className="btn-ghost">
            Savings
          </Link>
          <Link href="/#faq" className="btn-ghost">
            FAQ
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href="https://app.ihabibi.uk/login"
            className="btn-ghost"
          >
            Sign in
          </a>
          <a
            href="https://app.ihabibi.uk/register"
            className="btn-primary text-[13px] py-2.5 px-5"
          >
            Start free
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-warm-600 hover:bg-warm-100 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-warm-200 bg-warm-50 px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-warm-700 hover:bg-warm-100"
            >
              Home
            </Link>
            <Link
              href="/#what-it-tracks"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-warm-700 hover:bg-warm-100"
            >
              Features
            </Link>
            <Link
              href="/#roi"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-warm-700 hover:bg-warm-100"
            >
              Savings
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
            <a
              href="https://app.ihabibi.uk/register"
              className="btn-primary mt-1 w-full text-center text-[14px] py-2.5"
            >
              Start free
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}