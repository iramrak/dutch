'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image';
import { usePopup } from '../app/PopupContext'


export default function About() {
    const t = useTranslations('aboutme');
    const { openPopup } = usePopup()
    return (
    <article className='mt-[100px] lg:my-[150px] mx-[15px] flex-row lg:flex' id='About'>
        <section className='lg:w-[65%] lg:mr-[7%]'>
            <h1 className='text-[36px] font-semibold leading-[36px] mb-[15px] lg:text-[50px] lg:leading-[45px] lg:mb-[35px]'>{t('Title')}</h1>
            <p className='text-[12px] opacity-80 mb-[7px] lg:text-[16px] lg:leading-[24px] lg:mb-[10px] '>{t('SubOne')}</p>
            <p className='text-[12px] opacity-80 mb-[7px] lg:text-[16px] lg:leading-[24px] lg:mb-[10px] '>{t('SubTwo')}</p>
            <ul className='text-[12px] opacity-80 mb-[25px] lg:text-[16px] lg:leading-[24px] list-none space-y-2'>
                {t('SubThree')
                    .split('✔')
                    .filter(Boolean)
                    .map((item: string, i: number) => (
                    <li key={i} className="flex items-start">
                        <span className="mr-2">✔</span>
                        <span>{item.trim()}</span>
                    </li>
                    ))}
            </ul>
            <button className='bg-[#3C88FF] w-full lg:w-[400px] rounded-[18px] text-white' onClick={openPopup}>
                <p className='my-[24px]'>{t('Btn')}</p>
            </button>
        </section>
        <aside className='mt-[25px] lg:mt-[0px] lg:w-[65%] flex justify-center lg:justify-end'>
            <Image src={'/about.webp'} alt='About me Bas lohman' width={350} height={265} className='lg:w-[440px] lg:h-[470px]' />
        </aside>
    </article>
  )
}
