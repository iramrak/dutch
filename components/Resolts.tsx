'use client'
import React from 'react'
import { useLanguage } from '@/app/LanguageContext'

export default function Resolts() {
  const {t} = useLanguage()
  return (
      <article className='my-[100px] mx-[15px]'>
                <h1 className="text-[36px] leading-[36px] font-semibold my-[25px] lg:text-[45px] lg:leading-[50px] lg:w-[35%]">{t('resolts',"Title")}</h1>
                <div className="flex-row lg:flex">
                    <section className=' bg-[url(/resolts/resoltOne.webp)] bg-size-[200px] lg:bg-size-[270px] bg-no-repeat bg-bottom bg-white rounded-[14px] w-full h-[250px] lg:h-[280px] text-center py-[20px] lg:px-[28px]'>
                        <h1 className='text-[28px] leading-[25px] font-semibold lg:text-[28px] lg:leading-[30px]'>{t('resolts','MainOne')}</h1>
                        <p className='text-[16px] opacity-80 pt-[14px] lg:pt-[16px] lg:text-[16px] lg:leading-[20px]'>{t('resolts','SubOne')}</p>
                    </section>
                    <section className=' bg-[url(/resolts/resoltTwo.webp)] bg-size-[260px] lg:bg-size-[340px] bg-no-repeat bg-bottom bg-white rounded-[14px] w-full h-[250px] lg:h-[280px] text-center p-[15px] my-[20px] lg:my-[0px] lg:mx-[20px] py-[20px] lg:px-[28px]'>
                        <h1 className='text-[28px] leading-[25px] font-semibold lg:text-[28px] lg:leading-[30px]'>{t('resolts','MainTwo')}</h1>
                        <p className='text-[16px] opacity-80 pt-[14px] lg:pt-[16px] lg:text-[16px] lg:leading-[20px]'>{t('resolts','SubTwo')}</p>
                    </section>
                    <section className=' bg-[url(/resolts/resoltThree.webp)] bg-size-[280px] lg:bg-size-[380px] bg-no-repeat bg-bottom bg-white rounded-[14px] w-full h-[250px] lg:h-[280px] text-center p-[15px] py-[20px] lg:px-[28px]'>
                        <h1 className='text-[28px] leading-[25px] font-semibold lg:text-[28px] lg:leading-[30px]'>{t('resolts','MainThree')}</h1>
                        <p className='text-[16px] opacity-80 pt-[14px] lg:pt-[16px] lg:text-[16px] lg:leading-[20px]'>{t('resolts','SubThree')}</p>
                    </section>
                </div>
            </article>
)
}
