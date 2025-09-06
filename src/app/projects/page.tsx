"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js, Tailwind, and Three.js.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "portfolio", // no extension, just base name
  },
  {
    title: "E-commerce App",
    description: "Full-stack shop with authentication, Stripe payments, and admin panel.",
    link: "https://www.youtube.com/watch?v=5eveNk3o1ME",
    image: "ecommerce",
  },
  {
    title: "Chatbot AI",
    description: "Conversational assistant using OpenAI API with real-time streaming.",
    link: "https://www.youtube.com/watch?v=11ki_jMfCrI",
    image: "chatbot",
  },
  {
    title: "Calculator App",
    description: "A simple yet stylish calculator built with React and Tailwind.",
    link: "https://calculator-fsucatti-13.vercel.app/",
    image: "calculator",
  },
  {
    title: "MongoDB Project",
    description: "Full CRUD application using MongoDB, Express, and Node.js.",
    link: "https://journal-app-francisco-sucatti.vercel.app/",
    image: "mongodb",
  },
  {
    title: "Random Game",
    description: "A fun browser-based game with animations and sound effects.",
    link: "https://www.youtube.com/watch?v=SMCd5zrsFpE",
    image: "game",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white px-8 py-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold mb-6 text-center 
                   bg-gradient-to-r from-indigo-400 via-teal-300 to-yellow-400 
                   bg-clip-text text-transparent drop-shadow-lg"
      >
        PROJECTS
      </motion.h1>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full mb-12"
      />

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={card}
            className="relative group rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-shadow"
            whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
            transition={{ duration: 0.3 }}
          >
            {/* Responsive image with fallback */}
            <picture>
              <source
                srcSet={`/projects/${project.image}.webp`}
                type="image/webp"
              />
              <Image
                src={`/projects/${project.image}.jpg`} // fallback
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
              />
            </picture>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 bg-teal-500 text-white rounded-md transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  More →
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
