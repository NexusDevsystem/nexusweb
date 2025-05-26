// src/components/FAQ.jsx
import React from 'react'
import AnimateOnScroll from './AnimateOnScroll'

const faqs = [
  {
    question: 'Qual é o tipo de serviço da Nexus?',
    answer: `Oferecemos desenvolvimento de sistemas sob medida, otimização de processos 
             e automação inteligente para empresas de todos os portes.`
  },
  {
    question: 'Por que contratar a Nexus e não outra software house?',
    answer: `Porque garantimos soluções totalmente personalizadas, foco em resultados 
             mensuráveis, e um suporte contínuo que mantém seu sistema sempre otimizado.`
  },
  {
    question: 'Qual é o diferencial da Nexus no desenvolvimento de software?',
    answer: `Utilizamos as mais recentes tecnologias e metodologias ágeis para entregar 
             sistemas robustos, seguros e escaláveis.`
  }
]

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary inline-block relative group">
              Perguntas Frequentes
              <span
                className="block h-1 bg-secondary absolute left-0 bottom-[-6px] w-0
                           group-hover:w-full transition-all duration-500 rounded"
              />
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Lista de FAQs */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map(({ question, answer }) => (
            <AnimateOnScroll key={question}>
              <details className="group bg-white rounded-lg shadow-md p-6">
                <summary className="cursor-pointer text-lg font-semibold text-primary flex justify-between items-center">
                  {question}
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {answer}
                </p>
              </details>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
