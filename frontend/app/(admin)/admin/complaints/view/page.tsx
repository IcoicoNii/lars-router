"use client";

import admin_bg from "@/app/(admin)/assets/admin-bg.png"; // <--- Import your admin background image (optional)
import logo from "@/app/assets/logo.png"; // <--- Import your logo image (optional)
import { Inter, Antic, Google_Sans } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ComplaintsPage() {
  const router = typeof window !== "undefined" ? require("next/navigation").useRouter() : null;

  // Helper for row navigation
  const handleRowClick = (href) => {
    if (router) router.push(href);
  };

  return (
    <main
      className="flex flex-col items-center justify-center min-h-[90dvh] relative"
      style={{
        backgroundImage: `url(${admin_bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '1rem',
      }}
    >
      <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col overflow-clip" style={{ minHeight: 'calc(100vh)' }}>

        {/* Gray strip with return, tracking number, dropdowns */}
        <div className="w-full flex flex-col md:flex-row items-center gap-4 mt-8 bg-[#767676] px-6 py-2 mb-4 shadow">
          <button
            onClick={() => router && router.back()}
            className="w-10 h-10 flex items-center justify-center bg-[#ffffff] text-black rounded-full font-bold hover:bg-[#4b4b4b] transition focus:outline-none focus:ring-2 focus:ring-[#9a9a9a]"
            aria-label="Return"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <span className="text-lg font-bold text-[#ffffff] flex-1 text-center md:text-left">Tracking No: <span className="font-mono">2026-0001</span></span>
          <span className="text-[#fff] font-medium flex items-center gap-2">
            Status:
            <select className="border border-[#575757] bg-white text-[#444f25] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3b3b3b]">
              <option value="open">Open</option>
              <option value="closed">Closed</option>
              <option value="pending">Pending</option>
            </select>
          </span>
          <span className="text-[#fff] font-medium flex items-center gap-2">
            Type:
            <select className="border border-[#575757] bg-white text-[#444f25] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3b3b3b]">
              <option value="complaint">Complaint</option>
              <option value="suggestion">Suggestion</option>
              <option value="other">Other</option>
            </select>
          </span>
        </div>

        {/* 2x2 Grid Section */}
        <div className="w-full px-4 grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-3">
          <div className="bg-[#eeeeee] rounded-md shadow-md px-6 min-h-auto flex items-center justify-center">
            {/* Top Left Cell Content */}
            <h2 className="text-2xl font-bold text-[#444f25] w-full m-0">COMPLAINT SUBJECT</h2>
          </div>

          <div className="bg-[#eeeeee] rounded-md shadow-md p-2 min-h-auto flex items-center justify-center">
            <div className="bg-white w-full rounded-md p-2 h-full">
              <h2 className="text-md text-justify  text-[#444f25] w-full m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus inventore voluptatum quia quo itaque voluptatem corporis beatae molestias libero id dolores eos excepturi minima animi, tenetur optio hic. Sapiente, nesciunt!</h2>
            </div>
            {/* Top Right Cell Content */}
          </div>

          <div className="bg-[#eeeeee] rounded-md col-start-2 row-start-1 row-end-3 shadow-md p-6 min-h-40 flex items-center justify-center">
            {/* Bottom Right Cell Content */}
            <span className="text-[#444f25] font-semibold">3</span>
          </div>

        </div>

        <div className="w-full h-auto flex flex-row border justify-between">
          <button className="px-4 py-2 bg-[#ad8820] text-white rounded-md hover:bg-[#9a6f1a] transition focus:outline-none focus:ring-2 focus:ring-[#8c6e1a]">
            Update Status
          </button>
          <button className="px-4 py-2 bg-[#ad8820] text-white rounded-md hover:bg-[#9a6f1a] transition focus:outline-none focus:ring-2 focus:ring-[#8c6e1a]">
            Add Note
          </button>
        </div>
        {/* ...rest of the page... */}

      </div>
    </main>
  );
}
