'use client'
import React from 'react'
import { useLanguage } from '@/app/LanguageContext'
import Image from 'next/image';
import { usePopup } from '../app/PopupContext'
import Link from 'next/link';

export default function Footer() {
    const {t} = useLanguage();
     const { openPopup } = usePopup()
      const navLinks = [
      { href: '#Education', label: t('header', 'Education') },
      { href: '#About', label: t('header', 'About') },
      { href: '#Rew', label: t('header', 'Rew') },
      { href: '#FAQ', label: t('header', 'FAQ') },
      { href: '#Contacts', label: t('header', 'Contacts') },
    ]
    return (
    <footer className='bg-white w-full h-[410px] p-[20px] lg:absolute left-0 right-0'>
      <div className="flex-row lg:container lg:mx-auto">
        <div className="flex justify-between items-center">
          <Image src={'/logo.webp'} alt='footer logo' width={208} height={55} className='lg:h-[70px] lg:w-[300px] lg:mt-[50px]'/>
          <button className='hidden items-center justify-center w-[260px] h-[48px] mt-[30px] bg-[#3C88FF] text-white rounded-xl lg:flex' onClick={openPopup}>
            <p>{t('footer','Btn')}</p>
          </button>
        </div>
        <div className="mt-[25px] flex justify-between lg:justify-start lg:gap-[80px]">
          <nav className='flex flex-col gap-[10px]'>
            <p className=' opacity-52'>{t('footer','NavigationLable')}</p>
           {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-blue-500 flex">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-[10px]">
              <p className=' opacity-52'>{t('footer','ContactMeLabel')}</p>
              <p>{t('footer','ContactsEmail')}</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className=' opacity-52'>{t('footer','GetAcquaintedLable')}</p>
              <Link href={'/terms'}>{t('footer','GetAcquainted')}</Link>
            </div>
          </div>
        </div>
        <button className='flex items-center justify-center w-full h-[70px] mt-[30px] bg-[#3C88FF] text-white rounded-3xl lg:hidden' onClick={openPopup}>
          <p>{t('footer','Btn')}</p>
        </button>
      </div>
    </footer>
  )
}
