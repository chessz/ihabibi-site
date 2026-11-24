import Link from 'next/link';
import Logo from '@/components/Logo';
import { APP_ORIGIN } from '@/lib/pricing-plans';

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link href="/" className="brand-link" aria-label="Habibi — ihabibi.uk">
              <Logo tone="light" tagline="ihabibi.uk" />
            </Link>
            <p>Life admin for UK households. Spoken name Habibi. Address ihabibi.uk.</p>
            <p>
              <a href="mailto:hello@ihabibi.uk">hello@ihabibi.uk</a>
            </p>
          </div>
          <div>
            <h2>Product</h2>
            <Link href="/#features">Features</Link>
            <br />
            <Link href="/#day">A day</Link>
            <br />
            <Link href="/#pricing">Pricing</Link>
            <br />
            <Link href="/#faq">FAQ</Link>
          </div>
          <div>
            <h2>Legal</h2>
            <Link href="/privacy">Privacy</Link>
            <br />
            <Link href="/terms">Terms</Link>
          </div>
          <div>
            <h2>Account</h2>
            <a href={`${APP_ORIGIN}/login`}>Sign in</a>
            <br />
            <a href={`${APP_ORIGIN}/register`}>Create free account</a>
            <br />
            <Link href="/waitlist">Product updates</Link>
          </div>
        </div>
        <div className="foot-legal">
          <span>© {new Date().getFullYear()} Habibi</span>
          <span>Built in the United Kingdom · No data sold</span>
        </div>
      </div>
    </footer>
  );
}
