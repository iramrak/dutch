'use client'
import { useState } from 'react'
import { useLanguage } from '@/app/LanguageContext'

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to send')

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <>
      <section className="flex flex-col md:flex justify-between bg-white rounded-2xl p-6 mx-auto my-10 bg-[url('/form.png')] bg-size-[800px] lg:bg-[url('/form.webp')] lg:bg-size-[700px] bg-no-repeat bg-right-top" id='Contacts'>
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2">
            {t('forms', 'Title')}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {t('forms', 'Subtitle')}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl flex flex-col gap-3 p-5 w-full md:w-[590px]"
        >
          <input
            name="name"
            type="text"
            placeholder={t('forms', 'Name')}
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className="rounded-2xl px-6 py-4 focus:ring-2 outline-none bg-[#F0F0F0] disabled:opacity-50"
          />
          <input
            name="email"
            type="email"
            placeholder={t('forms', 'Email')}
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className="rounded-2xl px-6 py-4 outline-none bg-[#F0F0F0] disabled:opacity-50"
          />
          <textarea
            name="message"
            placeholder={t('forms', 'Message')}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            rows={4}
            className="rounded-2xl px-6 py-4 outline-none bg-[#F0F0F0] disabled:opacity-50 resize-none"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-[#3C88FF] text-white font-semibold py-4 rounded-2xl hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? '...' : t('forms', 'Btn')}
          </button>
        </form>
      </section>

      {/* Toast notification */}
      <div
        className={`fixed bottom-6 right-6 z-[9999] px-6 py-3 rounded-xl text-white font-medium shadow-lg transition-all duration-500 ${status === 'success'
          ? 'opacity-100 translate-y-0 bg-green-500/80 backdrop-blur-sm'
          : status === 'error'
            ? 'opacity-100 translate-y-0 bg-red-500/80 backdrop-blur-sm'
            : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
      >
        {status === 'success' && '✅'}
        {status === 'error' && '❌'}
      </div>
    </>
  )
}