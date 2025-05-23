// src/components/Technologies.jsx
import React from 'react'
import { Lightbulb, Smartphone, Code, Cloud } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const techs = [
  {
    icon: Lightbulb,
    title: 'Inteligência Artificial e Machine Learning',
    desc: 'Implementamos algoritmos de IA e Machine Learning para criar sistemas que aprendem e se adaptam continuamente. Nossas soluções inteligentes podem analisar grandes volumes de dados, identificar padrões e fazer previsões que auxiliam na tomada de decisões estratégicas.',
    tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP']
  },
  {
    icon: Smartphone,
    title: 'Desenvolvimento Web e Mobile',
    desc: 'Criamos aplicações web e mobile modernas, responsivas e de alta performance. Utilizamos frameworks e bibliotecas atuais para garantir interfaces intuitivas e experiências de usuário excepcionais em qualquer dispositivo.',
    tags: ['React', 'Angular', 'Vue.js', 'React Native', 'Flutter']
  },
  {
    icon: Code,
    title: 'Integração de Sistemas',
    desc: 'Conectamos sistemas distintos para trabalhar em harmonia, eliminando silos de informação e permitindo o fluxo contínuo de dados entre departamentos e aplicações. Nossas soluções de integração são robustas, seguras e escaláveis.',
    tags: ['APIs RESTful', 'GraphQL', 'Microserviços', 'WebSockets']
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    desc: 'Desenvolvemos e migramos aplicações para ambientes em nuvem, aproveitando os benefícios de escalabilidade, disponibilidade e redução de custos. Nossos especialistas configuram infraestruturas otimizadas para as necessidades específicas de cada negócio.',
    tags: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
  }
]

export default function Technologies() {
  return (
    <section id="tech" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary inline-block relative group">
              Nossas Tecnologias
              <span className="block h-1 bg-secondary absolute left-0 bottom-[-6px] w-0 group-hover:w-full transition-all duration-500 rounded" />
            </h2>
            <p className="mt-2 text-gray-600">
              Utilizamos as tecnologias mais avançadas para desenvolver soluções robustas e escaláveis
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {techs.map(({ icon: Icon, title, desc, tags }) => (
              <div
                key={title}
                className="bg-white rounded-xl shadow-lg p-8 text-left transition-transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-blue-100 text-secondary text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
