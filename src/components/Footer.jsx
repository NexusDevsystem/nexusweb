// src/components/Footer.jsx
import React from 'react'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

const socials = [
  { icon: Instagram, url: 'https://www.instagram.com/nexus.devsystem?igsh=NW8xNGg3enhuaXBo&utm_source=qr', label: 'Instagram' },
  { icon: Linkedin,  url: 'https://www.linkedin.com/in/seu_perfil', label: 'LinkedIn' },
  { icon: Twitter,   url: 'https://twitter.com/seu_perfil', label: 'Twitter' }
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socials.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-secondary transition"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-sm text-accent/70">
          © {new Date().getFullYear()} Nexus Devsystem. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
