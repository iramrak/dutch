'use client'
import { useState } from 'react'
import { useLanguage } from '../app/LanguageContext'
import LanguageSwitcherButton from './LanguageSwitcherButton'
import Image from 'next/image'
import { usePopup } from '../app/PopupContext'



export default function Header() {
  const { t } = useLanguage()
  const { openPopup } = usePopup()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '#Education', label: t('header', 'Education') },
    { href: '#About', label: t('header', 'About') },
    { href: '#Rew', label: t('header', 'Rew') },
    { href: '#FAQ', label: t('header', 'FAQ') },
    { href: '#Contacts', label: t('header', 'Contacts') },
  ]

  return (
    <header className="sticky top-0 z-[9999] w-full px-[10px] rounded-2xl bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-0 flex justify-between items-center h-20">

        {/*PC */}
        <nav className="hidden md:flex gap-6 items-center justify-between w-full">
          <h1 className="text-2xl font-bold">
            <Image src="/logo.webp" alt="Logo" width={200} height={55} />
          </h1>
          <div className="flex gap-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-blue-500">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-6 items-center">
            <LanguageSwitcherButton />
            <button className="bg-blue-500 text-white px-10 py-3 rounded-[14px]" onClick={openPopup}>
              <p className='font-medium'>{t('header', 'Btn')}</p>
            </button>
          </div>
        </nav>

        {/* BG menu */}
        <div className="md:hidden flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold">
            <Image src="/logo.webp" alt="Logo" width={170} height={55} />
          </h1>
          <div className="flex items-center gap-4">
            <LanguageSwitcherButton />
            <button onClick={toggleMenu} className="w-8 h-8 relative">
              {isOpen ? (
                <Image src="/icons/close.webp" alt="Close menu" width={17} height={17} />
              ) : (
                <Image src="/icons/menu.webp" alt="Open menu" width={20} height={17} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white max-h-[80vh] overflow-y-auto z-[9999]">
          <nav className="flex flex-col gap-4 px-4 py-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-[12px]" onClick={openPopup}>
              {t('header', 'Btn')}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
