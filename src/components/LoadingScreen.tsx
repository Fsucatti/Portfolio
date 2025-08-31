"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // show for 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 flex items-center justify-center bg-black z-70"
        >
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Core pulsing circle */}
            <div className="w-12 h-12 rounded-full bg-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.9)] animate-pulse"></div>

            {/* Expanding ripple rings */}
            <span className="absolute w-12 h-12 rounded-full border-4 border-emerald-400 opacity-75 animate-ping"></span>
            <span className="absolute w-16 h-16 rounded-full border-4 border-emerald-400 opacity-50 animate-ping delay-150"></span>
            <span className="absolute w-24 h-24 rounded-full border-4 border-emerald-500 opacity-40 animate-ping delay-300"></span>
            <span className="absolute w-32 h-32 rounded-full border-4 border-emerald-600 opacity-30 animate-ping delay-500"></span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



// Usage: <LoadingScreen />
// Add the following CSS to your global styles or Tailwind config
/*  @keyframes spin {
    to { transform: rotate(360deg); }
}
*/              