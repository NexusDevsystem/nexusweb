// src/components/FAQ.jsx
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const faqs = [
  {
    question: 'Qual é o tipo de serviço da Nexus?',
    answer:
      'Oferecemos desenvolvimento sob medida de sistemas web e mobile, otimização de processos legados, automação inteligente e integrações complexas.'
  },
  {
    question: 'Por que contratar a Nexus e não outra software house?',
    answer:
      'Focamos em parcerias de longo prazo, entendendo profundamente seu negócio e entregando soluções escaláveis, seguras e alinhadas aos seus objetivos estratégicos.'
  },
  {
    question: 'Qual é o diferencial da Nexus no quesito desenvolvimento de Software?',
    answer:
      'Nosso time combina expertise em engenharia de software, metodologias ágeis e as tecnologias mais avançadas para garantir qualidade, performance e manutenibilidade.'
  },
  {
    question: 'Quais tipos de soluções a Nexus desenvolve?',
    answer:
      'Desde plataformas corporativas e ERPs personalizados até pipelines de automação,chatbots e sistemas com Machine Learning integrada.'
  }
]

export default function FAQ() {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((i) => (i - 1 + faqs.length) % faqs.length)
  const next = () =>
    setCurrent((i) => (i + 1) % faqs.length)

  return (
    <section id="faq" className="py-20 bg-primary text-accent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 animate-fadeIn"
        >
          Perguntas Frequentes
        </h2>

        <div className="relative overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${current * 100}%)`
            }}
          >
            {faqs.map(({ question, answer }, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full px-6"
              >
                <div className="bg-secondary/30 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">
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
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-secondary/50 hover:bg-secondary text-white p-2 rounded-full transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary/50 hover:bg-secondary text-white p-2 rounded-full transition"
            aria-label="Próximo"
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
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === current
                  ? 'bg-accent'
                  : 'bg-accent/40 hover:bg-accent/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
