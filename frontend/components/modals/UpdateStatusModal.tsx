"use client";

import { useState } from "react";

interface UpdateStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStatus: string;
  onUpdate: (newStatus: string) => void;
}

export default function UpdateStatusModal({ isOpen, onClose, currentStatus, onUpdate }: UpdateStatusModalProps) {
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);

  if (!isOpen) return null;

  const statuses = ["Open", "In Progress", "Resolved", "Closed"];

  const handleSubmit = () => {
    onUpdate(selectedStatus);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Update Status</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>

        <div className="p-6">
          <label className="block text-sm font-bold text-black mb-2 uppercase">SELECT NEW STATUS</label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#A67C00]"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>

          <div className="flex justify-end gap-3 mt-6">
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-black font-bold rounded hover:bg-gray-400 transition">
              Cancel
            </button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-[#A67C00] text-white font-bold rounded hover:brightness-110 transition">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}