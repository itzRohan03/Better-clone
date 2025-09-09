"use client";
import { useState } from "react";

export default function StartForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "", email: "", phone: "",
    propertyType: "Single-family", zip: ""
  });

  function next() { setStep(s => Math.min(s + 1, 3)); }
  function back() { setStep(s => Math.max(s - 1, 1)); }
  function update(field, value) { setData(d => ({ ...d, [field]: value })); }

  return (
    <div className="card">
      {step === 1 && (
        <div className="form">
          <div className="row">
            <div>
              <div className="label">Full name</div>
              <input className="input" value={data.name} onChange={e=>update("name", e.target.value)} />
            </div>
            <div>
              <div className="label">Email</div>
              <input className="input" type="email" value={data.email} onChange={e=>update("email", e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div>
              <div className="label">Phone</div>
              <input className="input" value={data.phone} onChange={e=>update("phone", e.target.value)} />
            </div>
            <div>
              <div className="label">ZIP</div>
              <input className="input" value={data.zip} onChange={e=>update("zip", e.target.value)} />
            </div>
          </div>
          <div className="ctaRow">
            <button className="btn" onClick={next}>Continue</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="form">
          <div>
            <div className="label">Property type</div>
            <select className="input" value={data.propertyType} onChange={e=>update("propertyType", e.target.value)}>
              <option>Single-family</option>
              <option>Condo</option>
              <option>Townhome</option>
              <option>Multi-unit</option>
            </select>
          </div>
          <div className="ctaRow">
            <button onClick={back}>Back</button>
            <button className="btn" onClick={next}>Continue</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form">
          <h3>Review</h3>
          <div className="grid2">
            <div><div className="label">Name</div><div>{data.name || "—"}</div></div>
            <div><div className="label">Email</div><div>{data.email || "—"}</div></div>
            <div><div className="label">Phone</div><div>{data.phone || "—"}</div></div>
            <div><div className="label">ZIP</div><div>{data.zip || "—"}</div></div>
            <div><div className="label">Property Type</div><div>{data.propertyType}</div></div>
          </div>
          <div className="ctaRow" style={{marginTop: 12}}>
            <button onClick={back}>Back</button>
            <a className="btn" href="/">Submit (demo)</a>
          </div>
          <p className="muted" style={{marginTop: 8}}>For demo only. No data is sent to a backend.</p>
        </div>
      )}
    </div>
  );
}
