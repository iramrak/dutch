'use client'
import { useState, useRef, useEffect, useTransition } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import Image from 'next/image'
import type { Locale } from '@/i18n/routing'

interface LangOption {
  code: Locale
  label: string
  flag: string
}

const LANGS: LangOption[] = [
  { code: 'en', label: 'English', flag: '/flags/en.webp' },
  { code: 'nl', label: 'Nederlands', flag: '/flags/nl.webp' },
  { code: 'ru', label: 'Русский', flag: '/flags/ru.webp' },
]

export default function LanguageSwitcherDropdown() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLang = LANGS.find(l => l.code === locale)!

  const switchLocale = (newLocale: Locale) => {
    setOpen(false)
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center px-1 py-1"
        disabled={isPending}
      >
        <Image src={currentLang.flag} alt={currentLang.label} width={40} height={40} className="rounded-full" />
        <svg
          className={`w-5 h-5 ml-1 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md overflow-hidden z-50">
          {LANGS.map(l => (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className="flex items-center gap-2 w-full px-3 py-2 hover:bg-blue-100 transition"
            >
              <Image src={l.flag} alt={l.label} width={20} height={20} className="rounded-full" />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
