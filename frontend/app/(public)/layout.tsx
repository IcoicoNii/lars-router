import type { Metadata } from "next";
import { Inter, Antic, Google_Sans } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link"; // <--- Don't forget this!
import Image from 'next/image'; // <--- And this if you use images! (optional)
import logo from "@/app/assets/logo.png"; // <--- Import your logo image (optional)

const inter = Inter({ subsets: ["latin"] });
const antic = Antic({ subsets: ["latin"], weight: "400" });
const googleSans = Google_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LARS",
  description: "LGU Response and Action System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Helper to get current date and day in readable format
  const now = new Date();
  const day = now.toLocaleDateString(undefined, { weekday: 'long' });
  const date = now.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>

        {/* === TOP BAR: Date, FAQ, Login/Register === */}
        <div className="bg-white border-b border-slate-200 text-slate-700">
          <div className="max-w-6xl mx-auto px-4 py-1 flex justify-between items-center text-sm">
            {/* Left: Date and Day */}
            <div className="flex items-center space-x-2">
              <span className={`font-medium ${antic.className}`}>{date}</span>
              <span className={`font-medium ${antic.className}`}>|</span>
              <span className={`font-medium ${antic.className}`}>{day}</span>
              <span className={`font-medium ${antic.className}`}>|</span>
              <Link href="/faq" className={`font-sm hover:text-blue-500 ${antic.className}`}>FAQ</Link>
            </div>
            {/* Right: FAQ and Auth Buttons */}
            <div className="flex items-center-safe">
              <Link href="/admin" className={`px-3 py-1  text-black hover:cursor-pointer hover:bg-[#cc9f24] hover:text-white rounded-md transition flex items-center gap-1 ${antic.className}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M8 6l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Login
              </Link>
              <span className={`font-medium ${antic.className} px-1`}>|</span>
              <button className={`px-3 py-1  border-slate-300 hover:bg-[#765c16] hover:cursor-pointer hover:text-white rounded-md transition ${antic.className}`}>Register</button>
            </div>
          </div>
        </div>

        {/* === TOP BUN: The Navigation Bar === */}
        <header className="bg-[#ad8820] text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">

            {/* Logo Area */}
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image src={logo} alt="LARS Logo" width={30} height={30} className="cursor-pointer" />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className={` ${googleSans.className} flex items-center gap-8 `}>
              <Link href="/public-issues" className="transition-colors duration-200 rounded-full px-3 py-1 hover:bg-white hover:text-[#ad8820]">Public Issue Board</Link>
              <Link href="/about" className="transition-colors duration-200 rounded-full px-3 py-1 hover:bg-white hover:text-[#ad8820]">About LARS</Link>
              <Link href="/feedback" className="transition-colors duration-200 rounded-full px-3 py-1 hover:bg-white hover:text-[#ad8820]">Feedback</Link>
              <Link href="/lgu-pass" className="transition-colors duration-200 rounded-full px-3 py-1 hover:bg-white hover:text-[#ad8820]">LGU Pass</Link>
              <Link href="/complain" className="ml-4 px-4 py-1 rounded-full bg-white text-[#ad8820] font-semibold shadow transition-colors duration-200 hover:bg-[#cecece] hover:text-[#a27f1e]">Submit a Ticket</Link>
            </nav>

          </div>
        </header>

        {/* === THE MEAT: The Page Content === */}
        {/* The 'children' prop is where your page.tsx content is injected */}
        <main className="flex-grow bg-slate-50">
          {children}
        </main>

        {/* === BOTTOM BUN: The Footer === */}
        <footer className="bg-slate-200 text-slate-600 text-center py-6 border-t border-slate-300">
          <p>&copy; 2026 Taglish AI Router. Built with Next.js & FastAPI.</p>
        </footer>

      </body>
    </html>
  );
}