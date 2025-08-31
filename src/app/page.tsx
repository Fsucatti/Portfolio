"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import CyberParticles from "@/components/Particles"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
       


      {/* Gradient background + glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-teal-900 to-black animate-gradient-x"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-emerald-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Cyber particles */}
        <CyberParticles count={80} />

      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-6xl md:text-8xl font-extrabold tracking-tight 
                   bg-gradient-to-r from-green-400 via-yellow-300 to-emerald-300 
                   bg-clip-text text-transparent drop-shadow-lg animate-shimmer"
      >
        Francisco Sucatti
      </motion.h1>
      



      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 text-xl md:text-2xl text-gray-300 mt-4"
      >
        Full-Stack Developer & Creator
      </motion.h2>

      {/* Call-to-action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex gap-6"
      >
        <Link
          href="/projects"
          className="px-6 py-3 bg-emerald-500/20 border border-emerald-400 rounded-lg 
                     text-emerald-300 hover:bg-emerald-400 hover:text-black transition-all duration-300"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 bg-yellow-500/20 border border-yellow-400 rounded-lg 
                     text-yellow-300 hover:bg-yellow-400 hover:text-black transition-all duration-300"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  )
}

