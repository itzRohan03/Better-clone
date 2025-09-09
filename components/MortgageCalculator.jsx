"use client";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function currency(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n || 0);
}

export default function MortgageCalculator() {
  const params = useSearchParams();
  const taxesFromURL = Number(params.get("taxes")) || 265;
  const zipFromURL = params.get("zip") || "421005";

  const [homePrice, setHomePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(70000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [taxes, setTaxes] = useState(taxesFromURL);
  const [insurance, setInsurance] = useState(120);
  const [hoa, setHoa] = useState(0);
  const [zip, setZip] = useState(zipFromURL);

  const principal = Math.max(0, homePrice - downPayment);
  const monthlyRate = rate / 100 / 12;
  const n = term * 12;

  const principalAndInterest = useMemo(() => {
    if (principal <= 0) return 0;
    if (monthlyRate === 0) return principal / n;
    const pow = Math.pow(1 + monthlyRate, n);
    return (principal * (monthlyRate * pow)) / (pow - 1);
  }, [principal, monthlyRate, n]);

  const totalMonthly = principalAndInterest + taxes + insurance + hoa;

  useEffect(() => {
    setDownPayment((dp) => Math.min(dp, homePrice));
  }, [homePrice]);

  return (
    <div className="grid2" style={{ alignItems: "start" }}>
      {/* left form */}
      <div className="card">
        <div className="form">
          {/* Home price / Down payment */}
          <div className="row">
            <div>
              <div className="label">Home price</div>
              <input
                className="input"
                type="number"
                min="0"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
              />
            </div>
            <div>
              <div className="label">Down payment</div>
              <input
                className="input"
                type="number"
                min="0"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Rate / Term */}
          <div className="row">
            <div>
              <div className="label">Interest rate (APR %)</div>
              <input
                className="input"
                type="number"
                step="0.01"
                min="0"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
            </div>
            <div>
              <div className="label">Loan term (years)</div>
              <select
                className="input"
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
              >
                <option value={30}>30</option>
                <option value={20}>20</option>
                <option value={15}>15</option>
                <option value={10}>10</option>
              </select>
            </div>
          </div>

          {/* Taxes / Insurance */}
          <div className="row">
            <div>
              <div className="label">Monthly property tax</div>
              <input
                className="input"
                type="number"
                min="0"
                value={taxes}
                onChange={(e) => setTaxes(Number(e.target.value))}
              />
            </div>
            <div>
              <div className="label">Home insurance (monthly)</div>
              <input
                className="input"
                type="number"
                min="0"
                value={insurance}
                onChange={(e) => setInsurance(Number(e.target.value))}
              />
            </div>
          </div>

          {/* HOA / ZIP */}
          <div className="row">
            <div>
              <div className="label">HOA (monthly)</div>
              <input
                className="input"
                type="number"
                min="0"
                value={hoa}
                onChange={(e) => setHoa(Number(e.target.value))}
              />
            </div>
            <div>
              <div className="label">ZIP (demo only)</div>
              <input
                className="input"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* right result */}
      <div className="card calcBox">
        <h3>Estimated monthly payment</h3>
        <div className="result">
          <div style={{ fontSize: 28, fontWeight: 800 }}>
            {currency(totalMonthly)}
          </div>
          <div className="muted">per month</div>
        </div>

        <div className="grid2">
          <div>
            <div className="label">Principal & interest</div>
            <div>{currency(principalAndInterest)}</div>
          </div>
          <div>
            <div className="label">Taxes</div>
            <div>{currency(taxes)}</div>
          </div>
          <div>
            <div className="label">Insurance</div>
            <div>{currency(insurance)}</div>
          </div>
          <div>
            <div className="label">HOA</div>
            <div>{currency(hoa)}</div>
          </div>
        </div>

        <p className="muted" style={{ marginTop: 8 }}>
          This is a simplified estimate for demo purposes and not a loan offer.
        </p>
      </div>
    </div>
  );
}
