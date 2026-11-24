import Image from 'next/image';
import { Fragment } from 'react';
import { APP_ORIGIN } from '@/lib/pricing-plans';

const WORDS = ['car tax', 'MOT', 'boiler service', 'council tax', 'bin day', 'insurance'];
const TICKER = [
  'MOT',
  'Car tax',
  'Boiler service',
  'Council tax',
  'Bin day',
  'Insurance',
  'Broadband',
  'Passport renewal',
  'Tenancy',
  'School run',
  'Dentist bill',
  'Buildings cover',
];

const TRANSCRIPT =
  'Your car tax for AB12 CDE runs out Friday. Want me to remind you again tomorrow?';

function TickerSet({ id }: { id: string }) {
  return (
    <div className="ticker-set">
      {TICKER.map((item) => (
        <Fragment key={`${id}-${item}`}>
          <span>{item}</span>
          <b>/</b>
        </Fragment>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero grain" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">
            <i aria-hidden="true" /> Personal life admin · United Kingdom
          </p>
          <h1>
            <span className="line">
              <span>Habibi</span>
            </span>
            <span className="line">
              <span>calls you</span>
            </span>
            <span className="line">
              <span>about your</span>
            </span>
            <span className="line">
              <span>
                <span className="rotator" aria-hidden="true">
                  <span className="rotator-sizer">boiler service</span>
                  <span className="rotator-inner" id="rotator">
                    {WORDS.map((word) => (
                      <span key={word}>{word}</span>
                    ))}
                  </span>
                </span>
              </span>
            </span>
            <span className="sr-only" id="rotator-live" aria-live="polite">
              car tax
            </span>
          </h1>
          <p className="hero-after">
            before Friday becomes a{' '}
            <em className="swash">
              fine
              <svg viewBox="0 0 120 14" aria-hidden="true">
                <path d="M3 9 C 22 2, 48 13, 68 7 S 104 3, 117 8" />
              </svg>
            </em>
            .
          </p>
          <p className="lede">
            Today’s list, a PIN-locked document vault, bills, vehicles and home costs — and a real
            phone call when a reminder can’t wait. You enter what you pay. No bank login.
          </p>
          <div className="cta-row">
            <a className="btn btn-coral btn-lg" href={`${APP_ORIGIN}/register`}>
              Create free account →
            </a>
            <a className="btn btn-ghost btn-lg" href="#features">
              See it in action
            </a>
          </div>
          <p className="trust">
            <b>Free for one home</b> · No bank login · Built in the UK · Reminder calls coming soon
            on Pro
          </p>
        </div>

        <div className="phone-col" role="img" aria-label="Example of Habibi calling about car tax. Coming soon on Pro.">
          <div className="ripple" aria-hidden="true" />
          <div className="ripple" aria-hidden="true" />
          <div className="ripple" aria-hidden="true" />
          <div className="phone">
            <div className="phone-screen">
              <div className="notch" aria-hidden="true" />
              <div className="call-top">
                <div className="call-chip">Coming soon on Pro</div>
                <div className="avatar" aria-hidden="true">
                  <Image src="/mark-gold.png" alt="" width={433} height={512} />
                </div>
                <h2>Habibi is calling</h2>
                <p>Mobile · reminder</p>
                <div className="wave" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="transcript">
                <span className="who">Live transcript · example</span>
                <span id="typed">{TRANSCRIPT}</span>
                <span className="cursor" id="cursor" aria-hidden="true" />
              </div>
              <div className="call-actions" aria-hidden="true">
                <div className="act act-down">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 4l10 10M14 4L4 14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="act act-up">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 3.5h3.2l1.4 3.6-2.1 1.3a12.2 12.2 0 0 0 6.1 6.1l1.3-2.1 3.6 1.4V17c0 1.2-.9 2.2-2.1 2.3C10.2 20 4 13.8 4.7 5.6 4.8 4.4 5.8 3.5 7 3.5Z"
                      stroke="#fff"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <TickerSet id="a" />
          <TickerSet id="b" />
        </div>
      </div>
    </section>
  );
}
