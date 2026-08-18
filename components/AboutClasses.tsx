'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

export default function ClassesResolts() {
    const t = useTranslations('aboutClasses');
    return (
        <div>
            <article className='my-[100px] mx-[15px]'>
                <h1 className="text-[36px] leading-[36px] font-semibold my-[25px] lg:text-[50px] lg:leading-[45px]">{t("Title")}</h1>
                <div className="flex-row lg:flex">
                    <section className='bg-[url(/01.webp)] bg-no-repeat  bg-size-[220px] bg-left-bottom bg-white rounded-[14px] w-full h-[200px] lg:h-[280px] lg:bg-size-[310px] text-center py-[20px] lg:px-[38px]'>
                        <h1 className='text-[24px] leading-[23px] font-semibold lg:text-[28px] lg:leading-[30px]'>{t('MainOne')}</h1>
                        <p className='text-[12px] px-5 opacity-80 pt-[7px] lg:pt-[14px] lg:text-[16px] lg:leading-[20px]'>{t('SubOne')}</p>
                    </section>
                    <section className='bg-[url(/02.webp)] bg-no-repeat  bg-size-[220px] bg-left-bottom bg-white rounded-[14px] w-full h-[200px] lg:h-[280px] lg:bg-size-[310px] text-center p-[15px] my-[20px] lg:my-[0px] lg:mx-[20px] py-[20px] lg:px-[38px]'>
                        <h1 className='text-[24px] leading-[23px] px-5 font-semibold lg:text-[28px] lg:leading-[30px]'>{t('MainTwo')}</h1>
                        <p className='text-[12px] px-5 opacity-80 pt-[7px] lg:pt-[14px] lg:text-[16px] lg:leading-[20px]'>{t('SubTwo')}</p>
                    </section>
                    <section className='bg-[url(/03.webp)] bg-no-repeat  bg-size-[220px] bg-left-bottom bg-white rounded-[14px] w-full h-[200px] lg:h-[280px] lg:bg-size-[310px] text-center p-[15px] py-[20px] lg:px-[38px]'>
                        <h1 className='text-[24px] leading-[23px] px-9 font-semibold lg:text-[28px] lg:leading-[30px]'>{t('MainThree')}</h1>
                        <p className='text-[12px] px-5 lg:px-0 opacity-80 pt-[7px] lg:pt-[14px] lg:text-[16px] lg:leading-[20px]'>{t('SubThree')}</p>
                    </section>
                </div>
            </article>
        </div>
  )
}
