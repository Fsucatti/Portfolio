"use client"
import { useEffect, useState, useRef } from "react"

export default function CyberParticles({ count = 40 }) {
  const colors = ["#22c55e", "#a3e635", "#06b6d4"] // emerald, lime, teal
  const [particles, setParticles] = useState<
    { id: number; top: number; left: number; size: number; color: string; delay: number }[]
  >([])
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const arr = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 80,
    }))
    setParticles(arr)
  }, [count])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => {
        const dx = mouse.current.x - p.left
        const dy = mouse.current.y - p.top
        const dist = Math.sqrt(dx * dx + dy * dy)

        // smooth repel (lerp)
        let offsetX = 0
        let offsetY = 0
        if (dist < 120) {
          const strength = (120 - dist) / 120 // closer = stronger push
          offsetX = -dx * strength * 0.2
          offsetY = -dy * strength * 0.2
        }

        return (
          <div
            key={p.id}
            className="absolute rounded-full opacity-0 animate-float transition-opacity duration-1000 ease-in"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              boxShadow: `0 0 8px ${p.color}, 0 0 20px ${p.color}`,
              transition: "opacity 1s ease-in, transform 0.15s ease-out",
              transitionDelay: `${p.delay}ms`,
              opacity: 1,
              transform: `translate(${offsetX}px, ${offsetY}px)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        )
      })}
    </div>
  )
}


