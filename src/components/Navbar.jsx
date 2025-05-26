// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { to: 'home',    label: 'Home' },
    { to: 'about',   label: 'Sobre Nós' },
    { to: 'services',label: 'Serviços' },
    { to: 'tech',    label: 'Tecnologias' },
    { to: 'cases',   label: 'Casos de Sucesso' },
    { to: 'faq',     label: 'FAQ' },
    { to: 'contact', label: 'Contato' }
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-50
        backdrop-blur-md bg-primary/60
        transition-shadow duration-200
        ${scrolled ? 'shadow-lg' : 'shadow-none'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* LOGO */}
        <img
          src="/nexuslogo.png"
          alt="Nexus Devsystem"
          className="h-8 md:h-10 cursor-pointer"
        />

        {/* DESKTOP */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                spy
                smooth
                offset={-80}
                duration={500}
                className="relative px-1 py-1 font-medium text-white hover:text-accent transition"
                activeClass="text-accent before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-accent"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:bg-white/20 transition"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden
          backdrop-blur-md bg-primary/70
          transition-[max-height] duration-300 overflow-hidden
          ${open ? 'max-h-60' : 'max-h-0'}
        `}
      >
        <ul className="flex space-x-6 overflow-x-auto px-4 py-3 scrollbar-none">
          {links.map(({ to, label }) => (
            <li key={to} className="flex-shrink-0">
              <Link
                to={to}
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={() => setOpen(false)}
                className="block whitespace-nowrap px-2 py-1 font-medium text-white hover:text-accent transition"
                activeClass="text-accent"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
