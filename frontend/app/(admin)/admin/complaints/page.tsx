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
      <div className="w-full h-full bg-white/90 rounded-2xl shadow-2xl flex flex-col gap-2 p-8" style={{ minHeight: 'calc(100vh)' }}>

        {/* 1st Row: Search and Filters */}
        <div className="w-full flex flex-col md:flex-row items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search complaints..."
            className="flex-1 border border-[#ad8820] bg-[#f9f6ef] text-[#444f25] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ad8820] placeholder:text-[#b6a76a]"
          />
          <select className="border border-[#ad8820] bg-[#f9f6ef] text-[#444f25] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ad8820]">
            <option value="">Status</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="pending">Pending</option>
          </select>
          <select className="border border-[#ad8820] bg-[#f9f6ef] text-[#444f25] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ad8820]">
            <option value="">Type</option>
            <option value="complaint">Complaint</option>
            <option value="suggestion">Suggestion</option>
            <option value="other">Other</option>
          </select>
          <select className="border border-[#ad8820] bg-[#f9f6ef] text-[#444f25] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ad8820]">
            <option value="">Referred To</option>
            <option value="department1">Department 1</option>
            <option value="department2">Department 2</option>
            <option value="department3">Department 3</option>
          </select>
        </div>

        {/* 2nd Row: Table */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full border border-[#e5e7eb] rounded-lg bg-[#f9f6ef]">
            <thead className="bg-[#ad8820]/90 text-white">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Tracking No</th>
                <th className="px-4 py-2 text-left font-semibold">Concern</th>
                <th className="px-4 py-2 text-left font-semibold">Type</th>
                <th className="px-4 py-2 text-left font-semibold">Status</th>
                <th className="px-4 py-2 text-left font-semibold">Referred To</th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="border-t border-[#e5e7eb] hover:bg-[#ffe9a0] cursor-pointer transition"
                onClick={() => window.location.href = '/admin/complaints/view'}
                tabIndex={0}
                style={{ outline: 'none' }}
              >
                <td className="px-4 py-2 text-[#444f25]">2026-0001</td>
                <td className="px-4 py-2 text-[#444f25]">Sample concern 1</td>
                <td className="px-4 py-2 text-[#ad8820]">Complaint</td>
                <td className="px-4 py-2 text-green-700 font-semibold">Open</td>
                <td className="px-4 py-2 text-[#444f25]">Department 1</td>
              </tr>
              <tr
                className="border-t border-[#e5e7eb] hover:bg-[#ffe9a0] cursor-pointer transition"
                onClick={() => window.location.href = '/admin/complaints/view'}
                tabIndex={0}
                style={{ outline: 'none' }}
              >
                <td className="px-4 py-2 text-[#444f25]">2026-0002</td>
                <td className="px-4 py-2 text-[#444f25]">Sample concern 2</td>
                <td className="px-4 py-2 text-[#ad8820]">Suggestion</td>
                <td className="px-4 py-2 text-red-700 font-semibold">Closed</td>
                <td className="px-4 py-2 text-[#444f25]">Department 2</td>
              </tr>
              <tr
                className="border-t border-[#e5e7eb] hover:bg-[#ffe9a0] cursor-pointer transition"
                onClick={() => window.location.href = '/admin/complaints/view'}
                tabIndex={0}
                style={{ outline: 'none' }}
              >
                <td className="px-4 py-2 text-[#444f25]">2026-0003</td>
                <td className="px-4 py-2 text-[#444f25]">Sample concern 3</td>
                <td className="px-4 py-2 text-[#ad8820]">Other</td>
                <td className="px-4 py-2 text-yellow-700 font-semibold">Pending</td>
                <td className="px-4 py-2 text-[#444f25]">Department 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
