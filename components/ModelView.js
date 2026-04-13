"use client";
import { useEffect, useState } from "react";

export default function ModelView({ modelSrc }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only import the heavy 3D library on the client side
    import("@google/model-viewer").then(() => {
      setIsMounted(true);
    });
  }, []);

  // Return a loading placeholder during server-side rendering
  if (!isMounted) {
    return (
      <div className="w-full h-[600px] bg-gray-200 animate-pulse flex items-center justify-center rounded-xl">
        <p className="text-gray-500 font-medium">Loading 3D Preview...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] bg-gray-100 rounded-xl overflow-hidden relative border border-gray-200 shadow-inner">
      <model-viewer
        src={modelSrc}
        ar
        camera-controls
        touch-action="pan-y"
        shadow-intensity="1"
        alt="Karvyn3D Design Review"
        style={{ width: "100%", height: "100%" }}
      >
        <button
          slot="ar-button"
          className="bg-white px-6 py-2 rounded-full absolute bottom-6 left-1/2 -translate-x-1/2 shadow-lg border border-gray-300 hover:bg-gray-50 transition-all font-bold text-sm"
        >
          👋 VIEW IN AR
        </button>
      </model-viewer>
    </div>
  );
}