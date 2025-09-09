"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="container nav">
      <Link className="brand" href="/">
        Better<span className="brandDot">•</span> 
      </Link>
      <div className="links">
        <Link href="/about-us">About</Link>
        <Link href="/mortgage-calculator">Calculator</Link>
        <Link className="btn" href="/start">
          Start
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
