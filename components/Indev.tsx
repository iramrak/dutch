'use client'
import React from 'react'
import { useLanguage } from '@/app/LanguageContext'
import Image from 'next/image'

export default function Indev() {
  const { t } = useLanguage()
  return (
    <article className='my-[100px] mx-[15px]'>
        <h1 className='text-[36px] font-semibold leading-[36px] lg:text-[50px] lg:leading-[55px]'>{t('indev','Title')}</h1>
        <div className="flex-row lg:flex items-center my-[25px]">
            <section className='w-full h-[180px] lg:h-[250px] flex flex-col justify-between bg-white rounded-[14px] p-[15px] lg:p-[20px]'>
                <Image src={'/indevOne.webp'} alt='Icon why indev' width={45} height={45} className='lg:w-[50px] lg:h-[50px]'/>
                <div className="">
                    <h1 className='pt-[10px] pb-[5px] text-[25px] w-[50%] font-semibold leading-[23px] lg:text-[28px] lg:leading-[28px] lg:w-[60%]'>{t('indev','MainOne')}</h1>
                    <p className='text-[12px] opacity-80 lg:text-[15px] lg:leading-[24px]'>{t('indev','SubOne')}</p>
                </div>
            </section>
         <section className='w-full h-[180px] lg:h-[250px] flex flex-col justify-between bg-white rounded-[14px] my-[15px] p-[15px] lg:p-[20px] lg:mx-[20px]'>
                <Image src={'/indevTwo.webp'} alt='Icon why indev' width={45} height={45} className='lg:w-[50px] lg:h-[50px]]'/>
                <div className="">
                    <h1 className='pt-[10px] pb-[5px] text-[25px] w-[70%] font-semibold leading-[23px] lg:text-[28px] lg:w-[70%] lg:leading-[28px]'>{t('indev','MainTwo')}</h1>
                    <p className='text-[12px] opacity-80 lg:text-[15px] lg:leading-[20px]'>{t('indev','SubTwo')}</p>
                </div>
            </section>
            <section className='w-full h-[220px] lg:h-[250px] flex flex-col justify-between bg-white rounded-[14px] p-[15px] lg:p-[20px]'>
                <Image src={'/indevThree.webp'} alt='Icon why indev' width={45} height={45} className='lg:w-[50px] lg:h-[50px]'/>
                <div className="">
                    <h1 className='pt-[10px] pb-[5px] text-[25px] w-[70%] font-semibold leading-[23px] lg:text-[28px] lg:w-[80%] lg:leading-[28px]'>{t('indev','MainThree')}</h1>
                    <p className='text-[12px] opacity-80 lg:text-[15px] lg:leading-[20px]'>{t('indev','SubThree')}</p>
                </div>
            </section>
        </div>
    </article>
  )
}
