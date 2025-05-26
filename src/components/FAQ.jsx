// src/components/FAQ.jsx
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const faqs = [
  {
    question: 'Qual é o tipo de serviço da Nexus?',
    answer:
      'Oferecemos desenvolvimento sob medida de aplicações web e mobile, otimização de processos legados, automação inteligente e integrações complexas.'
  },
  {
    question: 'Por que contratar a Nexus e não outra software house?',
    answer:
      'Porque não entregamos só código: construímos parcerias de longo prazo, entendendo a fundo seu negócio e garantindo soluções escaláveis e robustas.'
  },
  {
    question: 'Qual é o diferencial da Nexus no desenvolvimento de software?',
    answer:
      'Nosso time usa metodologias ágeis, QA contínuo e as tecnologias mais avançadas para garantir performance, segurança e manutenibilidade.'
  },
  {
    question: 'Quais tipos de soluções a Nexus desenvolve?',
    answer:
      'De ERPs personalizados a pipelines de automação, chatbots e sistemas com Machine Learning – tudo alinhado às suas necessidades.'
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
        relative overflow-hidden
        bg-cta-pattern bg-cover bg-center
        py-20
      "
    >
      {/* blobs animados */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulseSlow pointer-events-none"/>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full filter blur-2xl animate-pulseVerySlow pointer-events-none"/>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-12 animate-fadeIn">
          Perguntas Frequentes
        </h2>

        <div className="relative">
          {/* Slider */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {faqs.map(({ question, answer }, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full px-4"
              >
                <div
                  className="
                    bg-secondary/30 backdrop-blur-md
                    p-8 rounded-2xl shadow-2xl
                    border border-accent/20
                    transform hover:scale-105
                    transition duration-300
                    animate-slideIn
                  "
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-2xl font-semibold text-accent mb-4">
                    {question}
                  </h3>
                  <p className="text-accent/90 leading-relaxed">
                    {answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controles */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="
              absolute left-0 top-1/2 -translate-y-1/2
              bg-secondary/50 hover:bg-secondary
              text-white p-2 rounded-full
              transition
            "
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Próximo"
            className="
              absolute right-0 top-1/2 -translate-y-1/2
              bg-secondary/50 hover:bg-secondary
              text-white p-2 rounded-full
              transition
            "
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {faqs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`
                w-4 h-4 rounded-full
                transition-colors
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
