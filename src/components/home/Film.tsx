export default function Film() {
  return (
    <section id="film">
      <div className="wrap">
        <p className="sec-kicker">On film, later</p>
        <h2 className="sec-title">
          A short loop of the call, then a tour of the <em>house.</em>
        </h2>
        <p className="sec-sub">
          This frame is a placeholder. We’ll shoot a 6–10 second phone-call loop and a longer
          dashboard tour on a staged demo account.
        </p>
        <div className="player">
          <div className="player-screen">
            <svg className="scene" viewBox="0 0 420 220" fill="none" aria-hidden="true">
              <rect x="20" y="130" width="380" height="70" rx="8" fill="#2a221c" />
              <rect x="20" y="124" width="380" height="10" rx="3" fill="#3b322b" />
              <ellipse cx="300" cy="90" rx="70" ry="28" fill="#3a2a22" opacity=".5" />
              <rect x="248" y="40" width="86" height="160" rx="16" fill="#0d0d0f" stroke="#c4a574" strokeWidth="2" />
              <rect x="256" y="50" width="70" height="128" rx="10" fill="#1b1412" />
              <circle cx="291" cy="92" r="16" fill="#111827" stroke="#c4a574" />
              <text x="291" y="148" textAnchor="middle" fill="#e8c9a0" fontSize="9">
                Habibi
              </text>
              <circle cx="80" cy="86" r="36" fill="#0d6b6e" opacity=".85" />
              <path d="M62 90l18-16 18 16v28a4 4 0 0 1-4 4H66a4 4 0 0 1-4-4V90Z" stroke="#e8c9a0" strokeWidth="1.6" />
              <path d="M70 106h4l2.5-6 3.5 12 2.5-8 2 4h5" stroke="#e8c9a0" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div className="play" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l12-7L8 5Z" />
              </svg>
            </div>
          </div>
          <div className="player-bar">
            <b>Habibi — reminder call</b>
            <span>0:08 placeholder</span>
          </div>
        </div>
        <p className="ph-label">Placeholder for real footage · not a customer recording</p>
      </div>
    </section>
  );
}
