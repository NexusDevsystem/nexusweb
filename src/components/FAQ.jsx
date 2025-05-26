// src/components/FAQ.jsx
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const faqs = [
  {
    question: 'Quais setores a Nexus Devsystem atende?',
    answer:
      'Desenvolvemos soluções para indústrias, e-commerce, logística, saúde e serviços financeiros. Nossa abordagem customizada se adapta às particularidades de cada setor, garantindo resultados que elevam a eficiência e a competitividade do seu negócio.'
  },
  {
    question: 'Como a Nexus garante a segurança das soluções?',
    answer:
      'Adotamos as melhores práticas de segurança da informação desde a concepção até a entrega: criptografia ponta a ponta, testes de vulnerabilidade regulares, controles de acesso e auditorias contínuas, assegurando total conformidade com padrões como ISO/IEC 27001 e LGPD.'
  },
  {
    question: 'Qual é o processo de desenvolvimento adotado?',
    answer:
      'Seguimos metodologias ágeis (Scrum/Kanban), com sprints curtos e entregas incrementais. Isso permite feedback constante, alinhamento com o produto e flexibilidade para ajustes em tempo real, reduzindo riscos e acelerando o time-to-market.'
  },
  {
    question: 'Como funciona o suporte e manutenção pós-implementação?',
    answer:
      'Oferecemos planos de suporte 24/7 com monitoramento proativo, SLAs definidos e equipe dedicada. Realizamos correções, atualizações e melhorias contínuas para manter seus sistemas sempre seguros, estáveis e alinhados às novas demandas do mercado.'
  }
]

export default function FAQ() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + faqs.length) % faqs.length)
  const next = () => setCurrent(i => (i + 1) % faqs.length)

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-cta-pattern bg-cover bg-center py-20"
    >
      {/* blobs animados */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulseSlow pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full filter blur-2xl animate-pulseVerySlow pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-12 animate-fadeIn">
          Perguntas Frequentes
        </h2>

        {/* slider wrapper com overflow oculto */}
        <div className="relative overflow-x-hidden h-[240px] md:h-[200px]">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`
                absolute inset-0 px-4
                bg-secondary/30 backdrop-blur-md
                p-8 rounded-2xl shadow-2xl border border-accent/20
                transition-opacity duration-700 ease-in-out
                ${idx === current
                  ? 'opacity-100'
                  : 'opacity-0 pointer-events-none'}
              `}
            >
              <h3 className="text-2xl font-semibold text-accent mb-4">
                {faq.question}
              </h3>
              <p className="text-accent/90 leading-relaxed whitespace-normal break-words">
                {faq.answer}
              </p>
            </div>
          ))}

          {/* controles */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-secondary/50 hover:bg-secondary text-white p-2 rounded-full transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Próximo"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary/50 hover:bg-secondary text-white p-2 rounded-full transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* indicadores de slides */}
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
