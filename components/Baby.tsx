'use client'
import Image from 'next/image'
import React from 'react'
import { useLanguage } from '@/app/LanguageContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

export default function Baby() {
  const { t } = useLanguage()

    const certs = [
    { img: '/baby/CertificatesOne.webp', alt: 'Certificate 1' },
    { img: '/baby/CertificatesTwo.webp', alt: 'Certificate 2' },
    { img: '/baby/CertificatesThree.webp', alt: 'Certificate 3' },
    { img: '/baby/CertificatesFour.webp', alt: 'Certificate 4' },
    { img: '/baby/CertificatesFive.webp', alt: 'Certificate 5' },
    { img: '/baby/CertificatesSix.webp', alt: 'Certificate 6' },
  ]

  return (
    <article className="mx-[15px]" id="Certificates">

      <div className="mt-[40px]">
        <Swiper
          spaceBetween={20}
          modules={[Autoplay, FreeMode]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1.1, centeredSlides: true },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 3.5 },
          }}
        >
          {certs.map((cert, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#FAFAFA] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <Image
                  src={cert.img}
                  alt={cert.alt}
                  width={510}
                  height={380}
                  className="w-full h-auto object-cover select-none"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  )
}
