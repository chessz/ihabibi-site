const ITEMS = [
  { id: 'p-today', index: '01', label: 'Today’s tasks' },
  { id: 'p-notes', index: '02', label: 'Secure notes' },
  { id: 'p-bills', index: '03', label: 'Bills' },
  { id: 'p-cars', index: '04', label: 'Vehicles' },
  { id: 'p-home', index: '05', label: 'Home costs' },
  { id: 'p-remind', index: '06', label: 'Reminders' },
];

function Lock() {
  return (
    <svg className="lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path className="shackle" d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export default function Features() {
  return (
    <section id="features">
      <div className="wrap feat-grid">
        <div className="feat-sticky">
          <p className="sec-kicker">What Habibi keeps hold of</p>
          <h2 className="sec-title">
            Not a dashboard. A house that <em>talks back.</em>
          </h2>
          <p className="sec-sub">
            Example bills, documents and deadlines from an imaginary UK home — the kinds of things
            Habibi already tracks. The phone call is the new lead.
          </p>
          <ul className="feat-index" id="feat-index">
            {ITEMS.map((item, i) => (
              <li key={item.id}>
                <button type="button" data-target={item.id} className={i === 0 ? 'is-on' : undefined}>
                  <b>{item.index}</b> {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="feat-panels">
          <article className="panel" id="p-today" data-animate="todo">
            <span className="tag plan">Proposed Today view</span>
            <h3>Today’s tasks</h3>
            <p className="lead">A morning list drawn from your reminders — tick them off as you go.</p>
            <ul className="todo">
              <li className="done">
                <span className="box" aria-hidden="true">✓</span>
                <span className="lbl">Put the black bin out</span>
                <span className="when">7:15</span>
              </li>
              <li className="will" data-tick="1">
                <span className="box" aria-hidden="true">✓</span>
                <span className="lbl">School shoes by the door</span>
                <span className="when">8:00</span>
              </li>
              <li className="will" data-tick="2">
                <span className="box" aria-hidden="true">✓</span>
                <span className="lbl">Pay the dentist invoice</span>
                <span className="when">12:30</span>
              </li>
              <li>
                <span className="box" aria-hidden="true" />
                <span className="lbl">Ring the boiler engineer</span>
                <span className="when">17:00</span>
              </li>
            </ul>
          </article>

          <article className="panel" id="p-notes">
            <span className="tag">Starter and above</span>
            <h3>Secure notes &amp; documents</h3>
            <p className="lead">Passports, warranties and the tenancy — behind a PIN, in one vault.</p>
            <div className="docs">
              <div className="doc">
                <div className="ico" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4a574" strokeWidth="1.8">
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <path d="M8 8h8M8 12h8M8 16h5" />
                  </svg>
                </div>
                <div>
                  <strong>Passports</strong>
                  <span>Family · renew 2028</span>
                </div>
                <Lock />
              </div>
              <div className="doc">
                <div className="ico" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4a574" strokeWidth="1.8">
                    <path d="M4 19V6a2 2 0 0 1 2-2h8l6 6v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    <path d="M14 4v6h6" />
                  </svg>
                </div>
                <div>
                  <strong>Boiler warranty</strong>
                  <span>PDF · expires Nov 2027</span>
                </div>
                <Lock />
              </div>
              <div className="doc">
                <div className="ico" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4a574" strokeWidth="1.8">
                    <path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.5Z" />
                  </svg>
                </div>
                <div>
                  <strong>Tenancy agreement</strong>
                  <span>12 High Street · signed</span>
                </div>
                <Lock />
              </div>
            </div>
          </article>

          <article className="panel" id="p-bills">
            <span className="tag">Live now</span>
            <h3>Bills</h3>
            <p className="lead">Every recurring payment on a month you can actually see.</p>
            <div className="bills">
              <div className="bill ok">
                <div>
                  <strong>Council tax</strong>
                  <span>Paid · 1st of the month</span>
                </div>
                <div className="amt">£164</div>
              </div>
              <div className="bill due">
                <div>
                  <strong>Broadband — Virgin</strong>
                  <span>Due Friday</span>
                </div>
                <div className="amt">£32</div>
              </div>
              <div className="bill">
                <div>
                  <strong>Netflix</strong>
                  <span>Renews 28 Nov</span>
                </div>
                <div className="amt">£17.99</div>
              </div>
              <div className="bill">
                <div>
                  <strong>Buildings insurance</strong>
                  <span>Renews 4 Dec</span>
                </div>
                <div className="amt">£28</div>
              </div>
            </div>
          </article>

          <article className="panel" id="p-cars">
            <span className="tag">Live now · DVLA lookup</span>
            <h3>Vehicles</h3>
            <p className="lead">Add a registration. Habibi fills MOT and tax, then counts down.</p>
            <p className="car-meta">2019 Ford Focus · example plate</p>
            <div className="plate">AB12 CDE</div>
            <div className="chips">
              <div className="chip-c warn">
                <label>Tax</label>
                <b>3 days</b>
              </div>
              <div className="chip-c">
                <label>MOT</label>
                <b>46 days</b>
              </div>
              <div className="chip-c ok">
                <label>Insurance</label>
                <b>4 mo</b>
              </div>
            </div>
          </article>

          <article className="panel" id="p-home">
            <span className="tag">Live now</span>
            <h3>Home costs</h3>
            <p className="lead">One monthly number — and an honest energy check, not a switch quote.</p>
            <div className="energy-box">
              <div className="erow">
                Your unit rate <b>28.5p/kWh</b>
              </div>
              <div className="ebar" aria-hidden="true">
                <i />
                <span className="mark-line" title="Octopus reference" />
              </div>
              <div className="erow" style={{ marginTop: 8 }}>
                Octopus reference <b>24.1p/kWh</b>
              </div>
              <p className="energy-note">
                <b>Public Octopus reference, not whole-of-market.</b> A signal to review before the
                contract rolls over — not a switch quote.
              </p>
            </div>
          </article>

          <article className="panel" id="p-remind">
            <span className="tag soon">Call coming soon · others planned</span>
            <h3>Reminders that reach you</h3>
            <p className="lead">
              Choose how Habibi should nudge you. Only the phone call is in the works today.
            </p>
            <div className="channels">
              <div className="ch on">
                <span className="dot" aria-hidden="true" /> Phone call <small>Coming soon on Pro</small>
              </div>
              <div className="ch">
                <span className="dot" aria-hidden="true" /> WhatsApp <small>Planned</small>
              </div>
              <div className="ch">
                <span className="dot" aria-hidden="true" /> Push notification <small>Planned</small>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
