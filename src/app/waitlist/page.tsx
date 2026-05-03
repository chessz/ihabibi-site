'use client';

import Container from '@/components/Container';
import { ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-slate-900">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker-light mb-4">Early access</p>
          <h1 className="font-serif text-[2.5rem] leading-[1.15] font-medium tracking-[-0.01em] text-white sm:text-[3rem]">
            Join the waitlist.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-warm-300/80">
            Get early access to H.A.B.I.B.I. Help shape the household OS before anyone else.
          </p>

          {submitted ? (
            <div className="mt-10 rounded-xl border border-sage/30 bg-sage/10 px-8 py-6 text-center">
              <Check size={32} className="mx-auto mb-3 text-sage" />
              <p className="text-lg font-semibold text-white">You&rsquo;re on the list.</p>
              <p className="mt-2 text-sm text-warm-300">
                We&rsquo;ll be in touch when early access opens. No spam, ever.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10">
              <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 rounded-lg border border-white/15 bg-slate-800 px-4 py-3 text-[15px] text-white placeholder:text-warm-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-700/30"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Join
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
              <p className="mt-4 text-xs text-warm-400">
                No spam. No sharing. Early access invites go out in batches.
              </p>
            </form>
          )}

          <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-warm-400">
            <span>Built in the UK</span>
            <span aria-hidden="true">·</span>
            <span>GDPR compliant</span>
            <span aria-hidden="true">·</span>
            <span>No credit card required</span>
          </div>
        </div>
      </Container>
    </section>
  );
}