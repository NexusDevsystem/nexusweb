import React from 'react'
import { Zap, CheckCircle, TrendingUp, Users } from 'lucide-react'

const values = [
  { icon: Zap,        title: 'Inovação',   desc: 'Estamos constantemente explorando novas tecnologias e abordagens para oferecer soluções de ponta aos nossos clientes.' },
  { icon: CheckCircle, title: 'Excelência', desc: 'Comprometemo-nos com a qualidade em cada linha de código e em cada interação com nossos clientes.' },
  { icon: TrendingUp,  title: 'Resultados', desc: 'Focamos em entregar soluções que geram impacto real e mensurável para o negócio de nossos clientes.' },
  { icon: Users,       title: 'Parceria',   desc: 'Construímos relacionamentos duradouros com nossos clientes, entendendo profundamente seus desafios e objetivos.' }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-primary text-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          Sobre a Nexus Devsystem
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Missão & Visão */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 bg-accent w-12 h-12 rounded-full 
                            flex items-center justify-center text-primary font-bold text-lg z-20">
              N
            </div>
            <div className="bg-secondary p-6 sm:p-8 rounded-2xl shadow-lg border border-accent/20 text-accent z-10">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Nossa Missão</h3>
              <p className="text-accent/90 leading-relaxed mb-6">
                A Nexus Devsystem nasceu com a missão de transformar negócios através da automação inteligente de sistemas. Acreditamos que a tecnologia deve ser uma aliada poderosa para empresas de todos os portes, permitindo que elas se concentrem no que realmente importa: seu core business e crescimento.
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Nossa Visão</h3>
              <p className="text-accent/90 leading-relaxed">
                Buscamos ser referência em soluções tecnológicas que impulsionam a eficiência empresarial, criando sistemas que não apenas resolvem problemas atuais, mas também preparam as empresas para desafios futuros em um mercado cada vez mais digital e competitivo.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/50 rounded-2xl transform rotate-2 translate-x-4 translate-y-4 z-10"></div>
            <div className="relative bg-secondary p-6 sm:p-8 rounded-2xl shadow-lg text-accent z-20">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6">Nossos Valores</h3>
              <ul className="space-y-6">
                {values.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center bg-accent w-10 h-10 rounded-full">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-accent/90 mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
