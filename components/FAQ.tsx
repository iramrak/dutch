'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('faq');
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    { q: t('qOne'), a: t('aOne') },
    { q: t('qTwo'), a: t('aTwo') },
    { q: t('qThree'), a: t('aThree') },
    { q: t('qFour'), a: t('aFour') },
  ];

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className=" mx-auto p-6 mt-[80px]" id='FAQ'>
      <h1 className="text-[36px] leading-[34px] font-semibold mb-6 lg:text-[50px] lg:leading-[50px] lg:w-[30%]">{t('Title')}</h1>

      <div className="space-y-2">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl transition-all duration-300"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-6 text-left font-medium focus:outline-none"
            >
              <span>{item.q}</span>
              <span
                className={`transition-transform text-xl ${
                  open === i ? 'rotate-45 text-blue-600' : 'text-gray-500'
                }`}
              >
                +
              </span>
            </button>

            {open === i && (
              <div className="px-4 pb-4 text-gray-600 animate-fade-in">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
