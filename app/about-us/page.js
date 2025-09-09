export const metadata = { title: "About Us — Better Clone" };

export default function AboutPage() {
  return (
    <section className="section">
      <h2>About Us</h2>
      <p className="muted">
        We’re a demo project replicating layout and basic flows from Better.com for an internship assignment.
        The goal is clarity, responsiveness, and simple, readable code.
      </p>
      <div className="grid2" style={{marginTop: 16}}>
        <div className="card">
          <h3>Mission</h3>
          <p>Make mortgages easier to understand with transparent estimates and a friendly start flow.</p>
        </div>
        <div className="card">
          <h3>How we work</h3>
          <p>Fast client-side interactions, accessible components, and a clean Next.js app router setup.</p>
        </div>
      </div>
    </section>
  );
}
