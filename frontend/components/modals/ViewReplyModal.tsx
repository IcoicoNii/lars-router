"use client";

import { useState } from "react";

interface ViewReplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackingNumber: string;
}

export default function ViewReplyModal({ isOpen, onClose, trackingNumber }: ViewReplyModalProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [narrative, setNarrative] = useState("The complaint has been reviewed by our department. The broken street light has been inspected and repairs are scheduled for next week. Our team will ensure proper lighting is restored to maintain safety in the area.");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Save logic here (API call, etc.)
    console.log("Saving:", { narrative, imageFile });
    setIsEditMode(false);
  };

  const handleCancel = () => {
    // Reset to original values if needed
    setIsEditMode(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">View Reply - {trackingNumber}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>

        <div className="p-6">
          {/* Department's Response Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-black mb-1">Department's Response</h3>
              <p className="text-sm text-gray-500">Updated At: <span className="font-semibold">February 28, 2026 10:30 AM</span></p>
            </div>
            {!isEditMode ? (
              <button
                onClick={() => setIsEditMode(true)}
                className="px-4 py-2 bg-[#A67C00] text-white font-bold text-sm uppercase rounded hover:brightness-110 transition-all"
              >
                Update
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-400 text-black font-bold text-sm uppercase rounded hover:bg-gray-500 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#A67C00] text-white font-bold text-sm uppercase rounded hover:brightness-110 transition-all"
                >
                  Save
                </button>
              </div>
            )}
          </div>

          {/* Two Container Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Narrative Report Container */}
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
              <h4 className="text-sm font-bold text-black mb-2 uppercase">Narrative Report</h4>
              {isEditMode ? (
                <textarea
                  value={narrative}
                  onChange={(e) => setNarrative(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded p-3 min-h-[200px] max-h-[300px] text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#A67C00] resize-none"
                  placeholder="Enter narrative report..."
                />
              ) : (
                <div className="bg-white border border-gray-300 rounded p-3 min-h-[200px] max-h-[300px] overflow-y-auto text-black text-sm">
                  <p>{narrative}</p>
                </div>
              )}
            </div>

            {/* Image Container */}
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
              <h4 className="text-sm font-bold text-black mb-2 uppercase">Attached Image</h4>
              {isEditMode ? (
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#A67C00] file:text-white hover:file:brightness-110 file:cursor-pointer"
                  />
                  <div className="bg-white border-2 border-dashed border-gray-300 rounded flex items-center justify-center min-h-[160px] max-h-[260px] overflow-hidden">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="max-w-full max-h-full object-contain" />
                    ) : (
                      <span className="text-sm text-gray-400">No image selected</span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white border-2 border-dashed border-gray-300 rounded flex items-center justify-center min-h-[200px] max-h-[300px] text-gray-400">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Attachment" className="max-w-full max-h-full object-contain" />
                  ) : (
                    <span className="text-sm">No image attached</span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Close Button */}
          <div className="flex justify-end gap-3 mt-6">
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-black font-bold rounded hover:bg-gray-400 transition">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}