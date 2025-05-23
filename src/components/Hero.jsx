// src/components/Hero.jsx
import React, { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

const keywords = ['Automação', 'Eficiência', 'Inovação', 'Crescimento']
// mapa de gêneros: 'f' → feminino (usa "sua"), 'm' → masculino (usa "seu")
const genders = {
  Automação: 'f',
  Eficiência: 'f',
  Inovação: 'f',
  Crescimento: 'm'
}

export default function Hero() {
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let timeout
    const current = keywords[index]

    if (!deleting && text.length < current.length) {
      // digitando
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        150
      )
    } else if (!deleting && text.length === current.length) {
      // pausa antes de apagar
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && text.length > 0) {
      // apagando
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        100
      )
    } else if (deleting && text.length === 0) {
      // passa para a próxima palavra
      setDeleting(false)
      setIndex((prev) => (prev + 1) % keywords.length)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  // palavra que efetivamente aparece
  const display = text || keywords[index]
  // escolhe 'seu' ou 'sua' de acordo com o gênero
  const artigo = genders[display] === 'f' ? 'sua' : 'seu'

  return (
    <section
      id="home"
      className="
        relative h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-br from-primary to-secondary
      "
    >
      {/* 1) GRID TECNOLÓGICO (LINHAS) sobre o gradiente */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px),' +
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px)',
        }}
      />

      {/* 2) BLOBS ANIMADOS */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20
                   rounded-full filter blur-3xl animate-pulseSlow"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10
                   rounded-full filter blur-2xl animate-pulseVerySlow"
        aria-hidden="true"
      />

      {/* 3) CONTEÚDO */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-accent leading-tight">
          Transforme sua empresa com{' '}
          <span className="text-white">{display}</span>
          <span className="inline-block w-1 h-8 bg-white align-text-bottom animate-blink ml-1" />
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-accent/90">
          Descubra como a Nexus Devsystem pode acelerar {artigo}{' '}
          <span className="text-white">{display}</span> e alavancar seus resultados.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center bg-secondary
                     px-8 py-4 rounded-full font-semibold text-white shadow-lg
                     transition-transform hover:scale-105"
        >
          Comece Agora
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>

      {/* 4) CURSOR PISCANDO */}
      <style jsx>{`
        @keyframes blink {
          0%,
          100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </section>
  )
}
