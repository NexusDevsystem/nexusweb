// src/components/SuccessCases.jsx
import React from 'react'
import { ArrowRightLeft, Building, ShoppingBag } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const cases = [
  {
    icon: ArrowRightLeft,
    title: 'Automação Logística',
    desc: 'Uma empresa de logística enfrentava desafios com o gerenciamento manual de rotas e rastreamento de entregas. Desenvolvemos um sistema integrado que automatizou todo o processo, desde o recebimento de pedidos até a confirmação de entrega.',
    result: '40% de redução no tempo de entrega',
    tag: 'Logística'
  },
  {
    icon: Building,
    title: 'Sistema Integrado Industrial',
    desc: 'Uma indústria de manufatura precisava integrar seus diversos sistemas departamentais que operavam isoladamente. Desenvolvemos uma plataforma centralizada que conectou produção, estoque, vendas e financeiro em tempo real.',
    result: '65% de aumento na eficiência operacional',
    tag: 'Indústria'
  },
  {
    icon: ShoppingBag,
    title: 'Otimização de E-commerce',
    desc: 'Um varejista online enfrentava problemas de desempenho em sua plataforma durante períodos de alto tráfego. Otimizamos a arquitetura do sistema e implementamos recursos de escalabilidade automática, eliminando gargalos e melhorando a experiência do usuário.',
    result: '300% de aumento na capacidade de tráfego',
    tag: 'E-commerce'
  }
]

export default function SuccessCases() {
  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary inline-block relative group">
              Casos de Sucesso
              <span className="block h-1 bg-secondary absolute left-0 bottom-[-6px] w-0 group-hover:w-full transition-all duration-500 rounded" />
            </h2>
            <p className="mt-2 text-gray-600">
              Conheça como nossas soluções transformaram a operação de nossos clientes
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="grid gap-8 md:grid-cols-3">
            {cases.map(({ icon: Icon, title, desc, result, tag }) => (
              <div
                key={title}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
                  <p className="text-gray-700 mb-4">{desc}</p>
                  <hr className="border-t border-gray-200 mb-4" />
                  <p className="text-gray-700">
                    <span className="font-semibold text-primary">Resultados:</span>{' '}
                    <span className="font-semibold">{result}</span>
                    <span className="inline-block bg-blue-100 text-primary text-sm font-semibold px-3 py-1 rounded-full ml-2">
                      {tag}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
