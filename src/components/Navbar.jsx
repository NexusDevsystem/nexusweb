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
    { to: 'cases',   label: 'Casos de Sucesso' },
    { to: 'tech',    label: 'Tecnologias' },
    { to: 'contact', label: 'Contato' }
  ]

  // Adiciona sombra quando scroll > 0
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-shadow
        bg-primary/30 backdrop-blur-md
        ${scrolled ? 'shadow-md' : ''}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* logo */}
        <Link to="home" smooth duration={500}>
          <img
            src="/nexuslogo.png"
            alt="Nexus Devsystem"
            className="h-12 md:h-16 lg:h-20 w-auto cursor-pointer"
          />
        </Link>

        {/* desktop links */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer px-2 py-1 text-white hover:text-secondary transition"
                activeClass="text-secondary border-b-2 border-secondary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* botão hamburguer mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-primary/50 transition"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open 
            ? <X className="w-6 h-6 text-white" /> 
            : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* menu móvel */}
      <div
        className={`
          md:hidden
          bg-primary/30 backdrop-blur-md
          transition-[max-height] duration-300 overflow-hidden
          ${open ? 'max-h-60' : 'max-h-0'}
        `}
      >
        <ul className="flex flex-col px-4 pb-4 space-y-2">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block py-2 text-white hover:text-secondary transition"
                activeClass="text-secondary font-semibold"
                onClick={() => setOpen(false)}
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
