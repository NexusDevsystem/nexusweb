// src/components/FAQ.jsx
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Qual é o tipo de serviço da Nexus?',
    answer:
      'Oferecemos desenvolvimento de sistemas sob medida, otimização de processos e automação inteligente para maximizar a eficiência do seu negócio.'
  },
  {
    question: 'Por que contratar a Nexus e não outra software house?',
    answer:
      'Nossa abordagem é 100% colaborativa: mergulhamos nos desafios do cliente, usamos tecnologias de ponta e garantimos entregas no prazo com altíssima qualidade.'
  },
  {
    question: 'Qual é o diferencial da Nexus no quesito desenvolvimento de Software?',
    answer:
      'Investimos em design escalável e manutenível, acompanhamos seus KPIs com monitoramento contínuo e evoluímos seu sistema conforme o crescimento da sua empresa.'
  },
  {
    question: 'Quais tipos de soluções a Nexus desenvolve?',
    answer:
      'Criamos aplicações web e mobile, implantamos IA e Machine Learning, fazemos integrações de sistemas, arquiteturas em cloud e pipelines de automação.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="py-20 bg-primary text-accent">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Perguntas frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-b border-secondary/50 pb-4 last:border-none"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-secondary transition-transform duration-200
                              ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === i && (
                <p className="mt-3 text-accent/80 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
