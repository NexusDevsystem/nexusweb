// src/components/Services.jsx
import React from 'react'
import { Check } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import codeIcon from '../assets/icons/code.png'
import optimizeIcon from '../assets/icons/optimize.png'
import automationIcon from '../assets/icons/automation.png'

const services = [
  {
    icon: codeIcon,
    title: 'Desenvolvimento de Sistemas',
    desc: 'Criamos sistemas personalizados do zero, adaptados às necessidades específicas do seu negócio. Nosso processo de desenvolvimento é colaborativo, garantindo que o produto final atenda perfeitamente aos requisitos e objetivos da sua empresa.',
    items: ['Sistemas web e mobile', 'Plataformas de gestão', 'Aplicações sob medida']
  },
  {
    icon: optimizeIcon,
    title: 'Otimização de Sistemas',
    desc: 'Aprimoramos sistemas existentes para melhorar performance, usabilidade e segurança. Identificamos gargalos e implementamos soluções que transformam sistemas legados em ferramentas modernas e eficientes.',
    items: ['Refatoração de código', 'Melhoria de performance', 'Atualização tecnológica']
  },
  {
    icon: automationIcon,
    title: 'Automação de Processos',
    desc: 'Automatizamos processos manuais e repetitivos para aumentar a produtividade e reduzir erros. Nossas soluções de automação permitem que sua equipe foque em atividades estratégicas enquanto tarefas rotineiras são executadas com precisão e eficiência.',
    items: ['Fluxos de trabalho', 'Integração entre sistemas', 'Processamento inteligente']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary inline-block relative group">
              Nossos Serviços
              <span className="block h-1 bg-secondary absolute left-0 bottom-[-6px] w-0 group-hover:w-full transition-all duration-500 rounded" />
            </h2>
            <p className="mt-2 text-gray-600">
              Desenvolvemos e aprimoramos sistemas para maximizar a eficiência e automação do seu negócio
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map(({ icon, title, desc, items }) => (
              <div
                key={title}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-full h-1 bg-secondary" />
                <div className="p-8 text-left">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <img src={icon} alt={title} className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-gray-700 mb-5">{desc}</p>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-center">
                        <Check className="w-5 h-5 text-secondary mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
