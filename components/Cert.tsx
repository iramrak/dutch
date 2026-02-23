'use client'
import Image from 'next/image';
import React from 'react'
import { useLanguage } from '@/app/LanguageContext'

export default function Cert() {
    const { t } = useLanguage();
    return (
        <article className='mt-[100px] mx-[15px]'>
            <h1 className='text-[36px] font-semibold leading-[36px] lg:text-[45px] lg:leading-[50px] lg:w-[33%]'>{t('cert','Title')}</h1>
            <div className="flex-row mt-[25px] lg:mt-[50px] lg:flex justify-between lg:justify-center">
                <section>
                    <Image src={'/CertificatesOne.webp'} alt='Certificates one' width={324} height={380} className='lg:w-[510px] w-full'/>
                </section>
                <section className='my-[25px] lg:my-[0px] lg:mx-[20px]'>
                    <Image src={'/CertificatesTwo.webp'} alt='Certificates one' width={324} height={380} className='lg:w-[510px] w-full'/>
                </section>
                <section>
                    <Image src={'/CertificatesThree.webp'} alt='Certificates one' width={324} height={380} className='lg:w-[510px] w-full'/>
                </section>
            </div>
        </article>
    )
}
