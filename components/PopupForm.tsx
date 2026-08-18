'use client'
import { usePopup } from '../app/PopupContext'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function PopupForm() {
  const t = useTranslations('popup')
  const { closePopup } = usePopup()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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
      setTimeout(() => closePopup(), 2000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div className="w-[90%] max-w-2xl  p-8 relative bg-[#3C88FF] rounded-3xl animate-fadeIn">
        <button
          onClick={closePopup}
          className="absolute top-5 right-6 text-white hover:text-gray-300"
        >
          ✖
        </button>
        <div className="mt-[25px] lg:my-[5%]">
          <h2 className='text-center text-white text-[36px] font-medium leading-[35px]'>{t('Title')}</h2>
          <p className='text-center text-white opacity-80 text-16px leading-[18px] mt-[6px] lg:px-[20%]'>{t('Sub')}</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-[30px] lg:px-[12%]">
            <input
              name="name"
              placeholder={t('Name')}
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className="border bg-white border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
            <input
              type="email"
              name="email"
              placeholder={t('Email')}
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className="border bg-white border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
            <textarea
              name="message"
              placeholder={t('Message')}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              rows={3}
              className="border bg-white border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 disabled:opacity-50 resize-none"
            />

            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-black text-white p-4 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? '...' : t('Send')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
