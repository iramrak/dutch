'use client'
import React from 'react'
import { useLanguage } from '@/app/LanguageContext'

export default function WhyMe() {
  const { t } = useLanguage() 
  return (
    <article className='mx-[15px] lg:mt-[140px]' id='Education'> 
        <h1 className='text-[36px] font-semibold leading-[36px] pb-[25px] lg:text-[50px] lg:leading-[50px] lg:w-[40%]'>{t('whyme','Title')}</h1>
            <div className="flex-row text-center">
                <div className="flex-row lg:flex">
                    <section className='bg-[url(/why/whycardone.webp)] bg-white rounded-[14px] bg-no-repeat bg-bottom bg-size-[200px] lg:bg-size-[270px] pt-[20px] w-full h-[250px] lg:h-[260px]'>
                        <h1 className='text-[28px] leading-[28px] font-semibold lg:text-[28px]'>{t('whyme','MainOne')}</h1>
                        <p className='text-[14px] leading-[18px] mt-[12px] opacity-80 px-[20px] lg:text-[16px] lg:leading-[20px]'>{t('whyme','SubOne')}</p>
                    </section>
                    <section className='mt-[15] lg:mt-[0px] lg:ml-[20px] bg-[url(/why/whycardtwo.webp)] bg-white rounded-[14px] bg-no-repeat bg-bottom bg-size-[250px] lg:bg-size-[270px] pt-[20px] w-full h-[250px] lg:h-[260px]'>
                        <h1 className='text-[28px] leading-[28px] font-semibold lg:text-[28px]'>{t('whyme','MainTwo')}</h1>
                        <p className='text-[14px] leading-[18px] mt-[12px] opacity-80 px-[20px] lg:text-[16px] lg:leading-[20px]'>{t('whyme','SubTwo')}</p>
                    </section>
                </div>
                <div className="flex-row lg:flex mt-[20px] lg:mt-[20px]">
                    <section className='bg-[url(/why/whycardthree.webp)] bg-white rounded-[14px] bg-no-repeat bg-bottom bg-size-[250px] lg:bg-size-[270px] pt-[20px] w-full h-[250px] lg:h-[260px]'>
                        <h1 className='text-[28px] leading-[28px] font-semibold lg:text-[28px] lg:leading-[35px] lg:mb-[10px]'>{t('whyme','MainThree')}</h1>
                        <p className='text-[14px] leading-[18px] mt-[12px] opacity-80 px-[20px] lg:text-[16px] lg:leading-[20px]'>{t('whyme','SubThree')}</p>
                    </section>
                    <section className='my-[15] lg:my-[0px] lg:mx-[20px] bg-[url(/why/whycardfour.webp)] bg-white rounded-[14px] bg-no-repeat bg-bottom bg-size-[250px] lg:bg-size-[270px] pt-[20px] w-full h-[250px] lg:h-[260px]'>
                        <h1 className='text-[28px] leading-[28px] font-semibold lg:text-[28px]'>{t('whyme','MainFour')}</h1>
                        <p className='text-[14px] leading-[18px] mt-[12px] opacity-80 px-[20px] lg:text-[16px] lg:leading-[20px]'>{t('whyme','SubFour')}</p>
                    </section>
                    <section className='bg-[url(/why/whycardfive.webp)] bg-white rounded-[14px] bg-no-repeat bg-bottom bg-size-[210px] lg:bg-size-[240px] pt-[20px] w-full h-[250px] lg:h-[260px]'>
                        <h1 className='text-[28px] leading-[28px] lg:leading-[28px] font-semibold lg:text-[28px]'>{t('whyme','MainFive')}</h1>
                        <p className='text-[14px] leading-[18px] mt-[12px] opacity-80 px-[20px] lg:text-[16px] lg:leading-[20px]'>{t('whyme','SubFive')}</p>
                    </section>
                </div>
            </div>
    </article>  
  )
}
