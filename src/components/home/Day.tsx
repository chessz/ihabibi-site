const MOMENTS = [
  {
    time: '07:15',
    title: 'Black bin day',
    body: 'Today’s list already has it ticked. Habibi remembered because the council pattern is on the house.',
  },
  {
    time: '08:40',
    title: 'School run, then the dentist bill',
    body: 'A reminder sits on the morning list so it doesn’t vanish into an inbox. Mark it done when you’ve paid.',
  },
  {
    time: '13:10',
    title: 'Open the vault, not a drawer',
    body: 'Need the boiler warranty for an engineer? It’s in Secure Notes, behind your PIN — with the passport and the tenancy.',
  },
  {
    time: '18:05',
    title: 'Habibi calls about the car tax',
    body: '“Your car tax for AB12 CDE runs out Friday. Want me to remind you again tomorrow?” Coming soon on Pro — this is the moment the page is designed around.',
    call: true,
  },
  {
    time: '21:20',
    title: 'The house is quiet. The list is ready.',
    body: 'Tomorrow already has MOT in 46 days and the broadband renewal. You close the phone. Habibi keeps the dates.',
  },
];

export default function Day() {
  return (
    <section className="day" id="day">
      <div className="wrap">
        <p className="sec-kicker">A day with Habibi</p>
        <h2 className="sec-title">
          From the bins at dawn to a call at <em>dusk.</em>
        </h2>
        <p className="sec-sub">
          An illustrative Thursday in a UK household. Real users will see their own dates, not this
          story.
        </p>
        <div className="timeline">
          {MOMENTS.map((moment) => (
            <div className={`t-item${moment.call ? ' call' : ''}`} key={moment.time}>
              <div className="t-time">{moment.time}</div>
              <div className="t-rail">
                <div className="t-dot" />
              </div>
              <div className="t-body">
                <strong>{moment.title}</strong>
                <p>{moment.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
