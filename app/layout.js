import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Better Clone",
  description: "Simple 4-page Better.com replica for internship task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <header>
            <Navbar />
          </header>
          <main className="container">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
