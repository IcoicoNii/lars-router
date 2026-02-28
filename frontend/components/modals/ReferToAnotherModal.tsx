"use client";

import { useState } from "react";

interface ReferToAnotherModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentDepartment: string;
  onRefer: (department: string) => void;
}

export default function ReferToAnotherModal({ isOpen, onClose, currentDepartment, onRefer }: ReferToAnotherModalProps) {
  const [selectedDepartment, setSelectedDepartment] = useState(currentDepartment);

  if (!isOpen) return null;

  const departments = [
    "Public Works",
    "Health Services",
    "Social Welfare",
    "Engineering",
    "Sanitation",
    "Administration"
  ];

  const handleSubmit = () => {
    onRefer(selectedDepartment);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Refer to Another Department</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>

        <div className="p-6">
          <label className="block text-sm font-bold text-black mb-2 uppercase">SELECT DEPARTMENT</label>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#A67C00]"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>

          <div className="flex justify-end gap-3 mt-6">
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-black font-bold rounded hover:bg-gray-400 transition">
              Cancel
            </button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-[#A67C00] text-white font-bold rounded hover:brightness-110 transition">
              Refer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}