"use client"
import React from "react"
import { HomeIcon, UserIcon, FolderIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import { usePathname } from "next/navigation"

function NavItem({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <a
      href={href}
      className={`relative flex h-10 w-10 items-center justify-center group transition-all duration-300 ${
        isActive
          ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.9)]"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {/* Icon (default) */}
      <Icon className="h-6 w-6 absolute transition-opacity duration-300 group-hover:opacity-0" />
      {/* Label (on hover) */}
      <span className="text-yellow-300 font-medium opacity-0 absolute transition-opacity duration-300 group-hover:opacity-100">
        {label}
      </span>
    </a>
  )
}

function Logo() {
  return (
    <div className="group relative mb-10 flex items-center justify-center w-12 h-12">
      {/* Stylized "F" */}
      <span className="absolute opacity-100 group-hover:opacity-0 transition duration-500 font-extrabold text-3xl text-yellow-400">
        F
      </span>

      {/* Cat SVG from SVGRepo */}
      <span className="absolute opacity-0 group-hover:opacity-100 transition duration-500">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-yellow-400"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 9V3L11 4H8L5 3V9L9.5 11L14 9ZM14 9L20 12L22 18L20 21H4L2 19L4 17L2 15L4 13M7 21V9.88889M11 15V21L16.0435 16H18M8 7L8.00707 7.00707M11 7L11.0071 7.00707" />
        </svg>
      </span>
    </div>
  )
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 h-screen w-20 bg-gray-950 flex flex-col items-center justify-between py-8">
      {/* Logo */}
      <Logo />

      {/* Navigation */}
      <ul className="flex flex-col gap-6">
        <li>
          <NavItem href="/" icon={HomeIcon} label="Home" />
        </li>
        <li>
          <NavItem href="/about" icon={UserIcon} label="About" />
        </li>
        <li>
          <NavItem href="/projects" icon={FolderIcon} label="Projects" />
        </li>
        <li>
          <NavItem href="/contact" icon={EnvelopeIcon} label="Contact" />
        </li>
      </ul>

      {/* Footer / socials */}
      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/Fsucatti"
          target="_blank"
          className="relative flex h-10 w-10 items-center justify-center group"
        >
          {/* GitHub Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400 absolute transition-opacity duration-300 group-hover:opacity-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.293 9.387 7.865 10.915.575.106.785-.25.785-.554 0-.273-.01-1.171-.015-2.125-3.2.696-3.878-1.542-3.878-1.542-.523-1.329-1.278-1.683-1.278-1.683-1.046-.715.08-.701.08-.701 1.158.082 1.768 1.19 1.768 1.19 1.03 1.764 2.704 1.255 3.364.959.106-.746.402-1.255.73-1.543-2.555-.291-5.238-1.278-5.238-5.686 0-1.256.45-2.283 1.187-3.089-.12-.29-.514-1.463.113-3.05 0 0 .967-.31 3.17 1.18a11.07 11.07 0 0 1 2.885-.388c.979.004 1.964.132 2.885.388 2.2-1.49 3.166-1.18 3.166-1.18.63 1.587.237 2.76.116 3.05.74.806 1.187 1.833 1.187 3.089 0 4.418-2.687 5.392-5.252 5.678.414.357.783 1.065.783 2.149 0 1.551-.014 2.802-.014 3.183 0 .308.207.665.79.553C20.71 21.384 24 17.083 24 12c0-6.352-5.148-11.5-12-11.5z" />
          </svg>
          <span className="text-yellow-300 font-medium opacity-0 absolute transition-opacity duration-300 group-hover:opacity-100">
            GitHub
          </span>
        </a>
      </div>
    </nav>
  )
}


