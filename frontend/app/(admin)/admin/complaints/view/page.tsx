"use client";

import admin_bg from "@/app/(admin)/assets/admin-bg.png";
import logo from "@/app/assets/logo.png";
import { Inter, Antic, Google_Sans } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Import modals
import ViewReplyModal from "@/components/modals/ViewReplyModal";
import UpdateStatusModal from "@/components/modals/UpdateStatusModal";
import EditTypeModal from "@/components/modals/EditTypeModal";
import ReferToAnotherModal from "@/components/modals/ReferToAnotherModal";

export default function ComplaintsPage() {
  const router = typeof window !== "undefined" ? require("next/navigation").useRouter() : null;

  // Modal states
  const [isViewReplyOpen, setIsViewReplyOpen] = useState(false);
  const [isUpdateStatusOpen, setIsUpdateStatusOpen] = useState(false);
  const [isEditTypeOpen, setIsEditTypeOpen] = useState(false);
  const [isReferToAnotherOpen, setIsReferToAnotherOpen] = useState(false);

  // Data states
  const [status, setStatus] = useState("Open");
  const [type, setType] = useState("Complaint");
  const [referredTo, setReferredTo] = useState("Department Name");

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
            className="w-10 h-5 flex items-center justify-center bg-[#ffffff] text-black rounded-full font-bold hover:bg-[#4b4b4b] transition focus:outline-none focus:ring-2 focus:ring-[#9a9a9a]"
            aria-label="Return"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <span className="text-lg font-bold text-[#ffffff] flex-1 text-center md:text-left">Tracking No: <span className="font-mono">2026-0001</span></span>
        </div>

        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-2 px-4 md:px-6" style={{ maxHeight: 'calc(100vh - 250px)' }}>

          {/* Left Sidebar - Status Info */}
          <aside className="lg:w-56 flex-shrink-0 flex">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex-1 flex flex-col">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">STATUS</label>
                  <p className="text-sm text-gray-900 px-2 py-1 bg-white rounded-lg border-3 border-gray-300">{status}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">TYPE</label>
                  <p className="text-sm text-gray-900 px-2 py-1 bg-white rounded-lg border-3 border-gray-300">{type}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">REFERRED TO</label>
                  <p className="text-sm text-gray-900 px-2 py-1 bg-white rounded-lg border-3 border-gray-300">{referredTo}</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {/* Information Container */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              {/* Header Banner */}
              <div className="bg-[#E5E7EB] p-3 mb-4 rounded-md">
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight tracking-tight text-black uppercase">
                  Request of Repair of Broken Street Light
                </h1>
              </div>

              {/* Fields Container */}
              <div className="space-y-3">
                {/* Row 1: Citizen & LGUPASS */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="flex items-center gap-2 flex-1 w-full">
                    <span className="text-sm font-bold text-gray-700 uppercase whitespace-nowrap">Citizen:</span>
                    <div className="flex-1 h-7 bg-white border border-[#D1D5DB] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"></div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto sm:min-w-[150px]">
                    <span className="text-sm font-bold text-gray-700 uppercase whitespace-nowrap">Lgupass:</span>
                    <div className="flex-1 h-7 bg-white border border-[#D1D5DB] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"></div>
                  </div>
                </div>

                {/* Row 2: Contact & Date */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="flex items-center gap-2 flex-1 w-full">
                    <span className="text-sm font-bold text-gray-700 uppercase whitespace-nowrap">Contact No:</span>
                    <div className="flex-1 h-7 bg-white border border-[#D1D5DB] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"></div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto sm:min-w-[150px]">
                    <span className="text-sm font-bold text-gray-700 uppercase whitespace-nowrap">Date Filed:</span>
                    <div className="flex-1 h-7 bg-white border border-[#D1D5DB] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"></div>
                  </div>
                </div>

                {/* Row 3: Location & Open Map Button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="flex items-center gap-2 flex-1 w-full">
                    <span className="text-sm font-bold text-gray-700 uppercase whitespace-nowrap">Location:</span>
                    <div className="flex-1 h-7 bg-white border border-[#D1D5DB] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"></div>
                  </div>
                  <button className="flex items-center gap-1.5 px-4 py-1.5 bg-[#A67C00] rounded hover:brightness-110 transition-all whitespace-nowrap">
                    <span className="text-xs font-bold text-white uppercase">Open Map</span>
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Narrative Container */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col" style={{ minHeight: '200px', maxHeight: '400px' }}>
              <h2 className="text-sm font-bold text-gray-700 mb-2 uppercase">Narrative</h2>
              <div className="flex-1 text-gray-900 bg-white rounded-lg border border-gray-300 p-3 overflow-y-auto">
                narrative here
              </div>
            </div>
          </div>

          {/* Right Sidebar - Images/Attachments */}
          <aside className="lg:w-80 flex-shrink-0 flex">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex-1 flex flex-col">
              <h2 className="text-sm font-bold text-gray-700 mb-3 uppercase">Images/Attachments</h2>
              <div className="flex-1 bg-gray-50 rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">

              </div>
            </div>
          </aside>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 items-center px-4 md:px-6 py-4">
          <button
            onClick={() => setIsViewReplyOpen(true)}
            className="px-6 py-2 bg-[#A67C00] text-white font-bold text-sm uppercase rounded hover:brightness-110 transition-all"
          >
            View Reply
          </button>
          <button
            onClick={() => setIsUpdateStatusOpen(true)}
            className="px-6 py-2 bg-[#E5E7EB] text-black font-bold text-sm uppercase rounded hover:bg-gray-500 transition-all"
          >
            Update Status
          </button>
          <button
            onClick={() => setIsEditTypeOpen(true)}
            className="px-6 py-2 bg-[#E5E7EB] text-black font-bold text-sm uppercase rounded hover:bg-gray-500 transition-all"
          >
            Edit Type
          </button>
          <button
            onClick={() => setIsReferToAnotherOpen(true)}
            className="px-6 py-2 bg-[#E5E7EB] text-black font-bold text-sm uppercase rounded hover:bg-gray-500 transition-all"
          >
            Refer to Another
          </button>
        </div>

      </div>

      {/* Modals */}
      <ViewReplyModal
        isOpen={isViewReplyOpen}
        onClose={() => setIsViewReplyOpen(false)}
        trackingNumber="2026-0001"
      />
      <UpdateStatusModal
        isOpen={isUpdateStatusOpen}
        onClose={() => setIsUpdateStatusOpen(false)}
        currentStatus={status}
        onUpdate={(newStatus) => setStatus(newStatus)}
      />
      <EditTypeModal
        isOpen={isEditTypeOpen}
        onClose={() => setIsEditTypeOpen(false)}
        currentType={type}
        onUpdate={(newType) => setType(newType)}
      />
      <ReferToAnotherModal
        isOpen={isReferToAnotherOpen}
        onClose={() => setIsReferToAnotherOpen(false)}
        currentDepartment={referredTo}
        onRefer={(dept) => setReferredTo(dept)}
      />
    </main>
  );
}
