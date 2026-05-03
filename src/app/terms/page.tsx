'use client';

import Container from '@/components/Container';

export default function TermsPage() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="kicker-teal mb-4">Legal</p>
          <h1 className="heading mb-10">Terms of Service</h1>

          <div className="space-y-8 text-[15px] leading-relaxed text-warm-500">
            <p>
              <strong>Last updated:</strong> 3 May 2026
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">1. Acceptance of terms</h2>
            <p>
              By accessing or using H.A.B.I.B.I (&ldquo;the Service&rdquo;), you agree to be bound
              by these Terms of Service. If you do not agree, do not use the Service.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">2. Description of service</h2>
            <p>
              H.A.B.I.B.I provides a household operations platform for managing vehicles, property
              information, reminders, and related household data. The Service is currently in early
              access and provided on an &ldquo;as is&rdquo; basis.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">3. User accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account. You must provide accurate and
              complete information when creating an account.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">4. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to any part of the Service</li>
              <li>Interfere with or disrupt the Service or its infrastructure</li>
              <li>Use the Service to store or transmit malicious code</li>
              <li>Resell or redistribute the Service without permission</li>
            </ul>

            <h2 className="font-sans text-lg font-semibold text-warm-800">5. Third-party data</h2>
            <p>
              The Service integrates with third-party data sources including DVLA, Ordnance Survey,
              police.uk, and Open-Meteo. We do not guarantee the accuracy, completeness, or
              availability of third-party data. Vehicle data and MOT information should be verified
              against official sources.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">6. Disclaimer of warranties</h2>
            <p>
              The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
              We make no warranties, express or implied, regarding the reliability, accuracy, or
              availability of the Service. We are not liable for any losses arising from missed
              deadlines, renewals, penalty charges, or other consequences of using or not using the
              Service.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">7. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, H.A.B.I.B.I shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of the Service.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">8. Pricing and payment</h2>
            <p>
              The Service is currently free during early access. When paid plans are introduced,
              users will be given reasonable notice before any charges apply. No payment will be
              taken without explicit authorisation.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to the Service for violations of
              these terms. You may stop using the Service at any time. Upon request, we will delete
              your account and associated data in accordance with our Privacy Policy.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">10. Changes to terms</h2>
            <p>
              We may update these terms from time to time. Material changes will be communicated via
              email or through the Service. Continued use after changes constitutes acceptance.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">11. Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes shall be
              subject to the exclusive jurisdiction of the English courts.
            </p>

            <h2 className="font-sans text-lg font-semibold text-warm-800">12. Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a
                href="mailto:hello@ihabibi.uk"
                className="text-brand-700 underline underline-offset-4 hover:text-brand-800"
              >
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