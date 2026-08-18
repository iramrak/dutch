'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import {usePopup} from '../app/PopupContext'

export default function Premm() {
    const t = useTranslations('premm')
    const {openPopup} = usePopup() 
    return (
        <article className='bg-[url(/premm-mobile.webp)] bg-size-[385px] bg-[#242424] lg:bg-[url(/premm.webp)] bg-right bg-no-repeat absolute left-0 w-full lg:bg-size-[1500px] h-[695px] lg:h-[400px]'>
            <div className="p-[25px] text-white lg:w-[80%] lg:px-[10%] lg:pt-[65px]">
                <h1 className='text-[36px] leading-[40px] font-semibold lg:text-[49px] lg:leading-[46px] lg:w-[90%]'>{t('Title')}</h1>
                {/* <p className=' opacity-80 text-[12px] py-[10px] lg:pt-[15px] lg:pb-[25px] lg:text-[16px] lg:leading-[20px] lg:w-[70%]'>{t('Sub')}</p> */}
                <button className='bg-[#3C88FF] w-full mt-[15px] lg:w-[330px] h-[60px] flex items-center justify-center rounded-2xl' onClick={openPopup}>
                    <p>{t('Btn')}</p>
                </button>
            </div>
        </article>
  )
}
