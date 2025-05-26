// src/components/Footer.jsx
import React from 'react'
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-accent py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
        {/* Logo + Copyright */}
        <div className="text-center md:text-left">
          <img
            src="/nexuslogo.png"
            alt="Nexus Devsystem"
            className="h-12 mx-auto md:mx-0 mb-4"
          />
          <p className="text-sm">
            © {new Date().getFullYear()} Nexus Devsystem.<br/>
            Todos os direitos reservados.
          </p>
        </div>

        {/* Contato por E-mail */}
        <div className="text-center">
          <h4 className="font-semibold text-lg mb-2">Fale conosco</h4>
          <a
            href="mailto:contato@nexusdevsystem.com"
            className="flex items-center justify-center text-accent hover:text-secondary transition"
          >
            <Mail className="w-5 h-5 mr-2" />
            contato@nexusdevsystem.com
          </a>
        </div>

        {/* Redes Sociais */}
        <div className="text-center md:text-right">
          <h4 className="font-semibold text-lg mb-2">Redes sociais</h4>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://instagram.com/seu_perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/seu_perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/seu_perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
