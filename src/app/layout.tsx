import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { WaveBackground } from "@/components/WaveBackground";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seth Ghin Kai — Cybersecurity & Digital Forensics",
  description: "Personal portfolio of Seth Ghin Kai, a Cybersecurity & Digital Forensics student at Nanyang Polytechnic.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <WaveBackground />
        <header className="border-b border-border relative z-10">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
            <div className="flex items-center justify-between">
              <div>
                <Navigation />
              </div>
              <div />
            </div>
          </div>
        </header>
        <main className="flex-1 relative z-10 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
