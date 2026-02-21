import type { Metadata } from "next";
import { Inter, Antic, Google_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link"; // <--- Don't forget this!
import Image from 'next/image'; // <--- And this if you use images! (optional)
import logo from "@/app/assets/logo.png"; // <--- Import your logo image (optional)
import home from "@/app/(admin)/assets/icons/home.png"; // <--- Import your icons (optional)
import concern from "@/app/(admin)/assets/icons/concerns.png"; // <--- Import your icons (optional)
import feedback from "@/app/(admin)/assets/icons/feedbacks.png"; // <--- Import your icons (optional)
import board from "@/app/(admin)/assets/icons/issue board.png"; // <--- Import your icons (optional)
import spam from "@/app/(admin)/assets/icons/spam.png"; // <--- Import your icons (optional)
import analytics from "@/app/(admin)/assets/icons/analytics.png"; // <--- Import your icons (optional)
import settings from "@/app/(admin)/assets/icons/settings.png"; // <--- Import your icons (optional)

const inter = Inter({ subsets: ["latin"] });
const antic = Antic({ subsets: ["latin"], weight: "400" });
const googleSans = Google_Sans({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "LARS Admin",
  description: "LGU Response and Action System",
};

export default function AdminLayout({
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
        <header className="bg-[#444f25] text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">

            {/* Logo Area */}
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image src={logo} alt="LARS Logo" width={30} height={30} className="cursor-pointer" />
              </Link>
            </div>

          </div>
        </header>

        {/* === MIDDLE LAYOUT WRAPPER (Sidebar + Content) === */}
        <div className="flex flex-1 overflow-hidden">

          {/* SIDEBAR */}
          <aside className="w-44 bg-white pt-8 text-slate-800 shrink-0 flex flex-col items-center justify-start shadow-lg">
            <nav className={`flex flex-col w-full items-center ${montserrat.className}`} style={{ flexDirection: 'column' }}>
              <Link href="/admin" className="w-48 flex flex-col items-center text-center py-2 rounded-lg hover:bg-slate-100 transition ">
                <Image src={home} alt="Home" width={28} height={28} className="mb-1" />
                <span>Home</span>
              </Link>
              <Link href="/admin/complaints" className="w-48 flex flex-col items-center text-center py-2 rounded-lg hover:bg-slate-100 transition ">
                <Image src={concern} alt="Complaints" width={28} height={28} className="mb-1" />
                <span>Complaints</span>
              </Link>
              <Link href="/admin/feedbacks" className="w-48 flex flex-col items-center text-center py-2 rounded-lg hover:bg-slate-100 transition ">
                <Image src={feedback} alt="Feedbacks" width={28} height={28} className="mb-1" />
                <span>Feedbacks</span>
              </Link>
              <Link href="/admin/issue-board" className="w-48 flex flex-col items-center text-center py-2 rounded-lg hover:bg-slate-100 transition ">
                <Image src={board} alt="Issue Board" width={28} height={28} className="mb-1" />
                <span>Issue Board</span>
              </Link>
              <Link href="/admin/analytics" className="w-48 flex flex-col items-center text-center py-2 rounded-lg hover:bg-slate-100 transition ">
                <Image src={analytics} alt="Analytics" width={28} height={28} className="mb-1" />
                <span>Analytics</span>
              </Link>
              <Link href="/admin/spam" className="w-48 flex flex-col items-center text-center py-2 rounded-lg hover:bg-slate-100 transition ">
                <Image src={spam} alt="Spam" width={28} height={28} className="mb-1" />
                <span>Spam</span>
              </Link>
              <Link href="/admin/settings" className="w-48 flex flex-col items-center text-center py-2 rounded-lg hover:bg-slate-100 transition ">
                <Image src={settings} alt="Settings" width={28} height={28} className="mb-1" />
                <span>Settings</span>
              </Link>
              <Link href="/" className="w-48 text-center text-sm text-gray-400 mt-10 hover:text-blue-400">← Back to Site</Link>
            </nav>
          </aside>


          {/* === THE MEAT: The Page Content === */}
          {/* The 'children' prop is where your page.tsx content is injected */}
          <main className="grow bg-slate-50">
            {children}
          </main>

        </div>

        {/* === BOTTOM BUN: The Footer === */}
        <footer className="bg-slate-200 text-slate-600 text-center py-6 border-t border-slate-300">
          <p>&copy; 2026 Taglish AI Router. Built with Next.js & FastAPI.</p>
        </footer>

      </body>
    </html>
  );
}