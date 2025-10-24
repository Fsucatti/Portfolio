"use client"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Environment, Stars } from "@react-three/drei"
import { Mesh, TextureLoader, AdditiveBlending } from "three"
import { Suspense, useEffect, useRef, useState } from "react"

function Earth() {
  const meshRef = useRef<Mesh>(null!)
  const texture = useLoader(TextureLoader, "/planet.jpg") // change name if needed

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.25, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.4, 64, 64]} />
      <meshBasicMaterial
        color="#3b82f6" // blue glow
        transparent
        opacity={0.3}
        blending={AdditiveBlending}
        side={2} // BackSide to render halo properly
      />
    </mesh>
  )
}

function EnvironmentLighting() {
  const [shouldRenderEnvironment, setShouldRenderEnvironment] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch("/hdri/venice_sunset_1k.hdr", { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load /hdri/venice_sunset_1k.hdr (status ${response.status})`)
        }

        if (!cancelled) {
          setShouldRenderEnvironment(true)
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV !== "production") {
          console.warn(
            "[RotatingSphere] Environment map not available, falling back to default lighting.",
            error,
          )
        }

        if (!cancelled) {
          setShouldRenderEnvironment(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (!shouldRenderEnvironment) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <Environment files="/hdri/venice_sunset_1k.hdr" />
    </Suspense>
  )
}

export default function RotatingSphere() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 6], fov: 105 }}
    >
      <Stars
        radius={200} // much larger so edges are out of view
        depth={120} // how far stars go
        count={12000} // number of stars
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1.5} />

      {/* Earth */}
      <Earth />

      {/* Glow halo */}
      {/*<Atmosphere /> */}

      {/* Subtle reflections */}
      <EnvironmentLighting />

      <OrbitControls enableZoom={true} enablePan={false} />
    </Canvas>
  )
}
