const QUESTIONS = [
  {
    q: 'Do you connect to my bank?',
    a: 'No. You enter what you pay. Your bank stays yours — we don’t scrape transactions or use open banking.',
  },
  {
    q: 'Can Habibi really call me?',
    a: 'That’s the plan for Pro. Until phone reminder calls are on for customers, every mention on this page says coming soon.',
  },
  {
    q: 'Is the energy number a switch quote?',
    a: 'No. It’s a public Octopus reference, not whole-of-market. A signal to review before your contract rolls over.',
  },
  {
    q: 'Are my documents encrypted?',
    a: 'Notes and uploads sit in a PIN-locked vault on Starter and above. Data travels over HTTPS. Encryption at rest is planned; we won’t advertise it as live until it is.',
  },
];

export default function Faq() {
  return (
    <section id="faq">
      <div className="wrap">
        <p className="sec-kicker">FAQ</p>
        <h2 className="sec-title">
          Questions a household will actually <em>ask.</em>
        </h2>
        <div className="faq">
          {QUESTIONS.map((item) => (
            <div className="qa" key={item.q}>
              <strong>{item.q}</strong>
              <span>{item.a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
