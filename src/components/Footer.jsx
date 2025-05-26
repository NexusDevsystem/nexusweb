// src/components/Footer.jsx
import React from 'react'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-accent py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding + Social */}
        <div>
          <h4 className="text-2xl font-bold mb-4">Nexus Devsystem</h4>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://instagram.com/seu_perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/seu_perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/seu_perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm">© 2025 Nexus Devsystem. Todos os direitos reservados.</p>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contato</h4>
          <p className="text-sm mb-2">
            Email:{' '}
            <a
              href="mailto:contato@nexusdevsystem.com"
              className="underline hover:text-secondary transition"
            >
              contato@nexusdevsystem.com
            </a>
          </p>
          <p className="text-sm">
            Telefone:{' '}
            <a
              href="tel:+551199999999"
              className="underline hover:text-secondary transition"
            >
              (11) 99999-9999
            </a>
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Perguntas Frequentes</h4>

          <details className="mb-3">
            <summary className="cursor-pointer font-medium hover:text-secondary transition">
              Qual é o tipo de serviço da Nexus?
            </summary>
            <p className="mt-1 text-sm text-accent/80">
              Oferecemos desenvolvimento de sistemas, otimização de processos e automação inteligente para empresas
              de todos os portes.
            </p>
          </details>

          <details className="mb-3">
            <summary className="cursor-pointer font-medium hover:text-secondary transition">
              Por que contratar a Nexus e não outra software house?
            </summary>
            <p className="mt-1 text-sm text-accent/80">
              Porque garantimos soluções personalizadas, foco em resultados mensuráveis e suporte contínuo.
            </p>
          </details>

          <details className="mb-3">
            <summary className="cursor-pointer font-medium hover:text-secondary transition">
              Qual é o diferencial da Nexus no desenvolvimento de software?
            </summary>
            <p className="mt-1 text-sm text-accent/80">
              Utilizamos tecnologias de ponta e metodologias ágeis para entregar sistemas robustos e escaláveis.
            </p>
          </details>
        </div>
      </div>
    </footer>
  )
}
