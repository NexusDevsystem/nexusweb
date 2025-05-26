// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

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
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-shadow
        ${scrolled ? 'backdrop-blur-md bg-primary/80 shadow-md' : 'bg-primary/60'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* logo */}
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <img
            src="/nexuslogo.png"
            alt="Nexus Devsystem"
            className="h-10 md:h-12"
          />
        </Link>

        {/* desktop links */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                spy
                smooth
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

        {/* botão mobile */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 relative focus:outline-none"
          onClick={() => setOpen(o => !o)}
        >
          {/* duas linhas */}
          <span
            className={`
              block absolute h-0.5 w-6 bg-white transition-transform duration-300
              ${open 
                ? 'rotate-45' 
                : '-translate-y-1.5'
              }
            `}
          />
          <span
            className={`
              block absolute h-0.5 w-6 bg-white transition-transform duration-300
              ${open 
                ? '-rotate-45' 
                : 'translate-y-1.5'
              }
            `}
          />
        </button>
      </div>

      {/* menu móvel */}
      <div
        className={`
          md:hidden bg-primary transition-max-height duration-300 overflow-hidden
          ${open ? 'max-h-72' : 'max-h-0'}
        `}
      >
        <ul className="flex flex-col px-4 pb-4 space-y-2">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                spy
                smooth
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
