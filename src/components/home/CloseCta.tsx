import Image from 'next/image';
import { APP_ORIGIN } from '@/lib/pricing-plans';

export default function CloseCta() {
  return (
    <section className="cta-band grain">
      <div className="wrap">
        <div className="cta-mark" aria-hidden="true">
          <Image src="/mark-gold.png" alt="" width={433} height={512} />
        </div>
        <h2>
          Give the house a voice, starting <em>free.</em>
        </h2>
        <p>
          Add a bill, a VRN, or a unit rate today. When Habibi can call, the reminders you already
          keep will have somewhere to ring.
        </p>
        <div className="cta-row">
          <a className="btn btn-coral btn-lg" href={`${APP_ORIGIN}/register`}>
            Create free account →
          </a>
        </div>
        <p className="trust" style={{ marginTop: 16 }}>
          Free for one home · No bank login · Built in the UK · We don’t sell your data
        </p>
      </div>
    </section>
  );
}
