export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="heroCard">
          <h1>Mortgages made simple.</h1>
          <p>Estimate your payment in minutes and get started when you’re ready.</p>
          <div className="ctaRow">
            <a className="btn" href="/start">Start</a>
            <a className="" href="/mortgage-calculator">    Try the calculator →</a>
          </div>
          <div className="badges" style={{marginTop: 16}}>
            <span className="badge">No commission</span>
            <span className="badge">Online process</span>
            <span className="badge">Fast estimates</span>
          </div>
        </div>
        <div className="grid2">
          <div className="card">
            <h3>Get an estimate</h3>
            <p className="muted">Check your monthly payment and affordability.</p>
            <a className="btn" href="/mortgage-calculator">Open calculator</a>
          </div>
          <div className="card">
            <h3>Learn about us</h3>
            <p className="muted">Our mission and how we work.</p>
            <a href="/about-us">About us →</a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Why this clone?</h2>
        <p className="muted">A simple Next.js demo to mirror the structure and interactions of Better.com’s key pages.</p>
      </section>
    </>
  );
}
