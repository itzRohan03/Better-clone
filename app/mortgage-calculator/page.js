"use client";

import { Suspense } from "react";
import MortgageCalculator from "@/components/MortgageCalculator";

export default function CalculatorPage() {
  return (
    <section className="section">
      <h2>Mortgage Calculator</h2>
      <p className="muted">
        Tweak the inputs and see your estimated monthly payment update immediately.
      </p>

      {/* Wrap client interactive component inside Suspense for safety */}
      <Suspense fallback={<p>Loading calculator...</p>}>
        <MortgageCalculator />
      </Suspense>
    </section>
  );
}
