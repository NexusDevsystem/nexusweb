import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { to: 'home',   label: 'Home' },
    { to: 'about',  label: 'Sobre Nós' },
    { to: 'services', label: 'Serviços' },
    { to: 'tech',   label: 'Tecnologias' },
    { to: 'cases',  label: 'Casos de Sucesso' },
    { to: 'faq',    label: 'FAQ' },
    { to: 'contact',label: 'Contato' },
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
        backdrop-blur-md ${scrolled ? 'bg-primary/80 shadow-md' : 'bg-primary/60'}
      `}
    >
      {/* 1) Wrapper principal: sempre visível */}
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
                className="cursor-pointer text-white hover:text-secondary px-2 py-1 transition"
                activeClass="text-secondary border-b-2 border-secondary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* hambúrguer mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-white/10 transition"
          onClick={() => setOpen(o => !o)}
        >
          {open
            ? <X className="w-6 h-6 text-white" />
            : <Menu className="w-6 h-6 text-white" />
          }
        </button>
      </div>

      {/* 2) Menu móvel: colado no nav, mas separado */}
      <div className={`${open ? 'block' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col px-4 pb-4 space-y-2">
          {links.map(({ to, label }) => (
            <li key={to} className="w-full">
              <Link
                to={to}
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={() => setOpen(false)}
                className="block w-full text-white hover:text-secondary px-3 py-2 transition font-medium"
                activeClass="text-secondary"
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
