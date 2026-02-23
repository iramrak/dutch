'use client'
import React from 'react'
import { useLanguage } from '@/app/LanguageContext'
import { usePopup } from '../app/PopupContext'
import Image from 'next/image'

export default function Hero() {
  const { t } = useLanguage()
  const { openPopup } = usePopup()
    return (
    <article className='w-[92%] mx-auto mt-[40px] lg:mt-[60px] h-[540px] bg-[#3C88FF] bg-[url(/hero-mobile.webp)] bg-size-[350px] lg:bg-[url(/hero.webp)] lg:bg-size-[1200px] lg:w-full lg:h-[400px] bg-right-bottom bg-no-repeat rounded-[20px]'>
        <div className="flex-row items-center px-[15px] py-[25px] lg:px-[50px] lg:py-[49px]">
            <div className='mb-[171px] lg:mb-[2%]'>
                <h1 className='text-[36px] lg:text-[50px] text-white font-semibold leading-[36px] lg:leading-[55px] mb-[10px] lg:w-[70%]'>{t('hero', 'Main')}</h1>
                <p className='text-[12px] lg:text-[16px] lg:leading-[22px] w-[71%] lg:w-[45%] opacity-80 text-white'>{t('hero','Sub')}</p>
            </div>

            <button className='h-[66px] w-full lg:w-[340px] rounded-[18px] bg-black' onClick={openPopup}>
                <p className='flex items-center justify-center text-white font-semibold text-[12px] lg:text-[16px]'>{t('hero','Btn')}</p>
            </button>
        </div>
    </article>
  )
}
