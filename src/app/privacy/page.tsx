'use client';

import Container from '@/components/Container';

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="kicker-teal mb-4">Legal</p>
          <h1 className="heading mb-10">Privacy Policy</h1>

          <div className="prose-custom space-y-8 text-[15px] leading-relaxed text-warm-500">
            <p>
              <strong>Last updated:</strong> 3 May 2026
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">1. Who we are</h2>
            <p>
              H.A.B.I.B.I (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the
              household operations platform accessible at <strong>ihabibi.uk</strong> and
              related subdomains. This privacy policy explains how we collect, use, and protect
              your personal data when you visit our marketing website or use our platform.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">2. What data we collect</h2>

            <h3 className="font-sans text-base font-semibold text-warm-700">Marketing website (www.ihabibi.uk)</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Waitlist sign-up:</strong> If you join our waitlist, we collect your email
                address. We use a third-party email service to store and manage waitlist entries
                securely.
              </li>
              <li>
                <strong>Analytics:</strong> We may use privacy-focused analytics to understand how
                visitors use our website. No personal data is collected for this purpose unless you
                explicitly provide it (e.g., via the waitlist form).
              </li>
            </ul>

            <h3 className="font-sans text-base font-semibold text-warm-700">Product platform (app.ihabibi.uk)</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Account information:</strong> When you register, we collect your name and
                email address. Passwords are bcrypt-hashed and never stored in plain text.
              </li>
              <li>
                <strong>Household data:</strong> Vehicle registration numbers, property postcodes,
                reminder content, and related household information that you choose to add to your
                account.
              </li>
              <li>
                <strong>Usage data:</strong> We do not sell, share, or use your household data for
                advertising or profiling purposes.
              </li>
            </ul>

            <h2 className="font-sans text-lg font-semibold text-warm-800">3. How we use your data</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>To provide and operate the H.A.B.I.B.I service</li>
              <li>To send waitlist updates and early access invitations (with your consent)</li>
              <li>To improve and develop the product based on usage patterns</li>
              <li>To communicate service-related announcements</li>
            </ul>
            <p>We do not use your data for advertising, profiling, or automated decision-making.</p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">4. Data sharing</h2>
            <p>
              We do not sell, rent, or trade your personal data. We may share data with trusted
              third-party service providers (e.g., email delivery, hosting) solely to operate the
              service. These providers are contractually bound to handle your data securely and in
              compliance with UK data protection law.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">5. Data security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your
              personal data, including:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>JWT-based authentication with short-lived access tokens</li>
              <li>Bcrypt-hashed passwords (cost factor 12)</li>
              <li>Parameterised database queries (Prisma ORM)</li>
              <li>HTTPS encryption for all data in transit</li>
              <li>Strict input validation on all API endpoints</li>
            </ul>

            <h2 className="font-sans text-lg font-semibold text-warm-800">6. Your rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>Lodge a complaint with the ICO (Information Commissioner&rsquo;s Office)</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello@ihabibi.uk" className="text-brand-700 underline underline-offset-4 hover:text-brand-800">
                hello@ihabibi.uk
              </a>
              .
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">7. Cookies</h2>
            <p>
              Our marketing website uses minimal cookies. The product platform uses essential
              session cookies for authentication. We do not use tracking cookies or third-party
              advertising cookies.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">8. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be communicated
              via email or through the platform.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">9. Contact</h2>
            <p>
              For questions about this privacy policy, contact us at{' '}
              <a href="mailto:hello@ihabibi.uk" className="text-brand-700 underline underline-offset-4 hover:text-brand-800">
                hello@ihabibi.uk
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}