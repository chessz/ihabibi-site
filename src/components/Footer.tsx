import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-slate-950">
      <div className="mx-auto max-w-content px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-sky-500 to-indigo-600 text-[10px] font-bold text-white shadow-sm shadow-sky-900/30"
                aria-hidden="true"
              >
                H
              </div>
              <span className="text-[11px] font-semibold tracking-[0.22em] text-white">
                H.A.B.I.B.I
              </span>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-warm-300/80">
              The household command centre that tracks every renewal, deadline, and
              responsibility across your home, vehicles, and local area.
            </p>
          </div>

          {/* Site */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm-400/60">
              Site
            </p>
            <ul className="mt-3.5 space-y-2.5">
              <li>
                <Link href="/" className="text-[14px] text-warm-300/80 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-[14px] text-warm-300/80 transition-colors hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-[14px] text-warm-300/80 transition-colors hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://app.ihabibi.uk/login"
                  className="text-[14px] text-warm-300/80 transition-colors hover:text-white"
                >
                  Sign in
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm-400/60">
              Legal
            </p>
            <ul className="mt-3.5 space-y-2.5">
              <li>
                <Link href="/privacy" className="text-[14px] text-warm-300/80 transition-colors hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[14px] text-warm-300/80 transition-colors hover:text-white">
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm-400/60">
              Contact
            </p>
            <ul className="mt-3.5 space-y-2.5">
              <li>
                <a
                  href="mailto:hello@ihabibi.uk"
                  className="text-[14px] text-warm-300/80 transition-colors hover:text-white"
                >
                  hello@ihabibi.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-8">
          <p className="text-[13px] text-warm-400/60">
            Built in the United Kingdom. No data sold, ever.
          </p>
        </div>
      </div>
    </footer>
  );
}