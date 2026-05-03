import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-slate-900">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 text-xs font-bold text-white shadow shadow-sky-900/30"
                aria-hidden="true"
              >
                H
              </div>
              <span className="text-xs font-semibold tracking-[0.2em] text-white">
                H.A.B.I.B.I
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-warm-300">
              The household command centre that tracks every renewal, deadline, and
              responsibility across your home, vehicles, and local area.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-300/60">
                Site
              </p>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <Link href="/" className="text-sm text-warm-300 transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="https://app.ihabibi.uk/login"
                    className="text-sm text-warm-300 transition-colors hover:text-white"
                  >
                    Sign in
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-300/60">
                Legal
              </p>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <Link href="/privacy" className="text-sm text-warm-300 transition-colors hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-warm-300 transition-colors hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-300/60">
                Contact
              </p>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <a
                    href="mailto:hello@ihabibi.uk"
                    className="text-sm text-warm-300 transition-colors hover:text-white"
                  >
                    hello@ihabibi.uk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-8">
          <p className="text-xs text-warm-400">
            Built in the UK. No data sold, ever.
          </p>
        </div>
      </div>
    </footer>
  );
}