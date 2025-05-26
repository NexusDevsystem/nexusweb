// src/components/FAQ.jsx
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const faqs = [
  {
    question: 'Quais setores a Nexus Devsystem atende?',
    answer:
      'Desenvolvemos soluções para indústrias, e-commerce, logística, saúde e serviços financeiros. Nossa abordagem customizada adapta-se às particularidades de cada setor, garantindo resultados que elevam a eficiência e a competitividade do negócio.'
  },
  {
    question: 'Como a Nexus garante a segurança das soluções?',
    answer:
      'Aplicamos criptografia ponta-a-ponta, testes de vulnerabilidade contínuos, controles de acesso granulares e auditorias regulares, tudo em conformidade com ISO/IEC 27001 e LGPD.'
  },
  {
    question: 'Qual processo de desenvolvimento vocês seguem?',
    answer:
      'Usamos metodologias ágeis (Scrum/Kanban), com entregas incrementais e feedback constante para ajustar prioridades e acelerar o tempo de lançamento no mercado.'
  },
  {
    question: 'Como funciona o suporte pós-implementação?',
    answer:
      'Oferecemos planos 24/7 com SLAs claros, monitoramento proativo e equipe dedicada para correções e evoluções contínuas do seu sistema.'
  }
]

export default function FAQ() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + faqs.length) % faqs.length)
  const next = () => setCurrent(i => (i + 1) % faqs.length)

  return (
    <section
      id="faq"
      className="
        relative py-20
        bg-cta-pattern bg-cover bg-center
      "
    >
      {/* blobs animados */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulseSlow pointer-events-none"/>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full filter blur-2xl animate-pulseVerySlow pointer-events-none"/>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-12 animate-fadeIn">
          Perguntas Frequentes
        </h2>

        {/* slider “cortado” em container sem sombra */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {faqs.map(({ question, answer }, idx) => (
              <div key={idx} className="flex-shrink-0 w-full px-4">
                <div
                  className="
                    bg-secondary/30 backdrop-blur-md
                    p-8 rounded-2xl
                    transform hover:scale-105
                    transition duration-300
                  "
                >
                  <h3 className="text-2xl font-semibold text-accent mb-4">
                    {question}
                  </h3>
                  <p className="text-accent/90 leading-relaxed break-words">
                    {answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* controles */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="
              absolute left-2 top-1/2 -translate-y-1/2
              bg-secondary/50 hover:bg-secondary text-white
              p-2 rounded-full transition
            "
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Próximo"
            className="
              absolute right-2 top-1/2 -translate-y-1/2
              bg-secondary/50 hover:bg-secondary text-white
              p-2 rounded-full transition
            "
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* bullets */}
        <div className="flex justify-center mt-8 space-x-2">
          {faqs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`
                w-4 h-4 rounded-full transition-colors
                ${idx === current
                  ? 'bg-accent'
                  : 'bg-accent/40 hover:bg-accent/70'}
              `}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
