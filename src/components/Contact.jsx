// src/components/Contact.jsx
import React, { useState } from 'react'
import { ShieldCheck, Zap, MessageCircle } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/mblovknq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email, company, message })
      })

      const body = await res.json()
      if (!res.ok) throw new Error(body.error || 'Erro desconhecido')

      setStatus('success')
      setName('')
      setEmail('')
      setCompany('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary inline-block relative group">
              Entre em Contato
              <span
                className="block h-1 bg-secondary absolute left-0 bottom-[-6px] w-0
                           group-hover:w-full transition-all duration-500 rounded"
              />
            </h2>
            <p className="mt-2 text-gray-600">
              Estamos prontos para ajudar sua empresa a alcançar o próximo nível de automação e eficiência
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-12 md:grid-cols-2">
          <AnimateOnScroll from="left">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Envie sua mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Seu nome"
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2
                               text-gray-900 placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2
                               text-gray-900 placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    placeholder="Nome da sua empresa"
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2
                               text-gray-900 placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Descreva como podemos ajudar sua empresa"
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2
                               text-gray-900 placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold
                             py-3 rounded-lg shadow-lg transition-transform hover:-translate-y-1 disabled:opacity-50"
                >
                  {status === 'sending'
                    ? 'Enviando...'
                    : status === 'success'
                    ? 'Enviado ✅'
                    : 'Enviar Mensagem'}
                </button>
                {status === 'error' && (
                  <p className="text-red-600 mt-2">Erro ao enviar. Tente novamente.</p>
                )}
              </form>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll from="right" delay={0.2}>
            {/* seus cards laterais aqui */}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
