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
      'Porque não entregamos só código: construímos parcerias de longo prazo, entendemos seu negócio e garantimos soluções escaláveis e de alta qualidade.'
  },
  {
    question: 'Qual é o diferencial da Nexus no quesito desenvolvimento de Software?',
    answer:
      'Nosso time alia expertise técnica com metodologias ágeis e foco em resultados mensuráveis para o seu negócio.'
  },
  {
    question: 'Quais tipos de soluções a Nexus desenvolve?',
    answer:
      'De plataformas corporativas a microserviços, APIs REST/GraphQL, pipelines de dados e infra em nuvem (AWS/Azure/GCP).'
  }
]

export default function FAQ() {
  const [current, setCurrent] = useState(0)
  const last = faqs.length - 1

  const prev = () => setCurrent(current === 0 ? last : current - 1)
  const next = () => setCurrent(current === last ? 0 : current + 1)
  const goTo = (i) => setCurrent(i)

  return (
    <section id="faq" className="py-20 bg-primary text-accent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 animate-fadeIn">
          Perguntas Frequentes
        </h2>

        <div className="relative overflow-hidden">
          {/* setas */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-secondary/30 rounded-full hover:bg-secondary transition z-10"
          >
            <ChevronLeft className="w-6 h-6 text-accent" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-secondary/30 rounded-full hover:bg-secondary transition z-10"
          >
            <ChevronRight className="w-6 h-6 text-accent" />
          </button>

          {/* cartões */}
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`absolute inset-0 p-8 bg-secondary bg-opacity-50 backdrop-blur-md rounded-xl
                          transition-opacity duration-500 ease-in-out
                          ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
              <p className="text-accent/90 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* indicadores */}
        <div className="mt-6 flex justify-center space-x-3">
          {faqs.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`
                w-3 h-3 rounded-full transition-colors
                ${i === current ? 'bg-accent' : 'bg-accent/40 hover:bg-accent/70'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
