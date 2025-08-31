"use client"
import { motion } from "framer-motion"
import RotatingSphere from "@/components/RotatingSphere"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center 
      relative overflow-hidden
      bg-gradient-to-br from-black via-indigo-950 to-black text-white px-8"
    >
      {/* Soft animated gradient glow behind content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.25),transparent_50%)] animate-[pulse_6s_ease-in-out_infinite] pointer-events-none" />

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left column - Sphere */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <div className="relative w-[48rem] h-[40rem] flex justify-center items-center rounded-2xl overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.8)]">
            {/* Canvas */}
            <RotatingSphere />

            {/* Radial fade mask */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_65%,black_100%)] pointer-events-none" />
          </div>
        </motion.div>

        {/* Right column - About text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm shadow-lg space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)] relative inline-block"
          >
            About Me
            {/* Animated underline */}
            <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-gradient-to-r from-yellow-400 to-indigo-500 rounded-full animate-[pulse_5s_infinite]" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Hi, I’m <span className="text-yellow-300 font-semibold">Francisco Sucatti</span>.{" "}
            I’m a <span className="text-indigo-400 font-medium">full-stack developer</span> passionate 
            about building clean, responsive, and interactive web apps. I enjoy working with{" "}
            <span className="text-yellow-200">React</span>,{" "}
            <span className="text-yellow-200">MongoDB</span>,{" "}
            <span className="text-yellow-200">Postman</span>,{" "}
            <span className="text-yellow-200">Next.js</span>, and{" "}
            <span className="text-yellow-200">TailwindCSS</span> to turn ideas into beautiful, functional websites.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            When I’m not coding, you’ll probably find me{" "}
            <span className="italic text-indigo-300">
              going on bike rides, spending time with my cat, playing my favorite videogames,
              and watching my favorite local futbol team
            </span>
            . I love solving problems and creating experiences that people genuinely enjoy using.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}




