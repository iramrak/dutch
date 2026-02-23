'use client';
import React from 'react';
import { useLanguage } from '@/app/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

export default function Revs() {
  const { t } = useLanguage();

  const reviews = [
    {
      text: t('revs', 'cardOneRev'),
      name: t('revs', 'nameOne'),
      img: '/NuPfp.png',
    },
    {
      text: t('revs', 'cardTwoRev'),
      name: t('revs', 'nameTwo'),
      img: '/EyPfp.png',
    },
    {
      text: t('revs', 'cardThreeRev'),
      name: t('revs', 'nameThree'),
      img: '/UPfp.png',
    },
    {
      text: (
        <>
          VISA <br />
          ING Bank <br />
          High School of Economics <br />
          DSM <br />
          DOW Chemicals <br />
          RABO Bank
        </>
      ),
      name: '',
      img: null, // без фото
    },
  ];

  return (
    <article className="mb-[50px] mt-[900px] lg:mt-[600px]" id="Rew">
      <h1 className="text-[36px] font-semibold leading-[36px] lg:w-[40%] lg:text-[50px] lg:leading-[50px]">
        {t('baby', 'Title')}
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.1}
        centeredSlides={false}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="mt-8"
      >
        {reviews.map((rev, i) => (
          <SwiperSlide key={i} className='bg-[#FAFAFA] rounded-2xl p-6 h-[490px]'>
             {rev.img && (
                <div className="flex items-center">
                  <Image
                    src={rev.img}
                    alt={rev.name || 'review'}
                    width={50}
                    height={50}
                    className="rounded-full mb-[20px]"
                  />
                  <p className="font-medium ml-3">{rev.name}</p>
                </div>
              )}
            <div className=" flex flex-col justify-between text-[#2E3033] transition-all">
              <div className="flex-1 overflow-hidden">
                <p className="text-sm leading-5 font-medium ">
                  {rev.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}
