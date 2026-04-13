"use client";
import { useEffect } from "react";

export default function ModelView({ modelSrc }) {
  useEffect(() => {
    // Import the custom element dynamically
    import("@google/model-viewer");
  }, []);

  return (
    <div className="w-full h-[600px] bg-gray-100 rounded-xl overflow-hidden relative">
      <model-viewer
        src={modelSrc}
        ar
        camera-controls
        touch-action="pan-y"
        shadow-intensity="1"
        alt="Karvyn3D Client Design"
        style={{ width: "100%", height: "100%", backgroundColor: "#f3f4f6" }}
      >
        <button
          slot="ar-button"
          className="bg-white px-4 py-2 rounded-lg absolute bottom-4 right-4 shadow-md border"
        >
          👋 View in your Room (AR)
        </button>
      </model-viewer>
      
      {/* Branding Overlay */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <h1 className="text-xl font-bold text-gray-800">Karvyn3D</h1>
        <p className="text-sm text-gray-500">Design Review Portal</p>
      </div>
    </div>
  );
}