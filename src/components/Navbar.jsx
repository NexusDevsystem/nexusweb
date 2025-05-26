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

  // adiciona sombra e blur na navbar ao dar scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-shadow
        ${scrolled
          ? 'backdrop-blur-md bg-primary/80 shadow-md'
          : 'bg-primary/60'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* logo */}
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <img
            src="/nexuslogo.png"
            alt="Nexus Devsystem"
            className="h-12 md:h-14"
          />
        </Link>

        {/* links desktop */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                spy
                smooth
                offset={-80}
                duration={500}
                className="cursor-pointer px-2 py-1 text-white hover:text-secondary transition-colors"
                activeClass="text-secondary border-b-2 border-secondary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* toggle mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-primary/30 transition"
          onClick={() => setOpen(o => !o)}
        >
          {open
            ? <X className="w-6 h-6 text-white" />
            : <Menu className="w-6 h-6 text-white" />
          }
        </button>
      </div>

      {/* menu móvel com fundo embaçado */}
      <div
        className={`
          md:hidden fixed top-16 inset-x-0 z-40
          bg-primary/60 backdrop-blur-md
          transition-[max-height] duration-300 overflow-hidden
          ${open ? 'max-h-screen' : 'max-h-0'}
        `}
      >
        <ul className="flex flex-col px-4 pt-4 pb-6 space-y-3">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                spy
                smooth
                offset={-80}
                duration={500}
                className="block py-2 text-white hover:text-secondary transition-colors"
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
