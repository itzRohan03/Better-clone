import MortgageCalculator from "@/components/MortgageCalculator";

export const metadata = {
  title: "Mortgage Calculator — Better Clone",
};

export default function CalculatorPage() {
  return (
    <section className="section">
      <h2>Mortgage Calculator</h2>
      <p className="muted">
        Tweak the inputs and see your estimated monthly payment update
        immediately.
      </p>
      <MortgageCalculator />
    </section>
  );
}
