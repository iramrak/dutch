'use client'
import React from 'react'
import { useLanguage } from '@/app/LanguageContext'

export default function Terms() {
  const { t } = useLanguage()

  return (
    <main className="max-w-3xl mx-auto my-[50px] p-6 leading-relaxed text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        {t('terms', 'Title')}
      </h1>

      <h2 className="text-2xl font-semibold mb-4">
        {t('terms', 'SubTitle')}
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-medium mb-2">
          {t('terms', 'FeesTitle')}
        </h3>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>{t('terms', 'Fee60')}</li>
          <li>{t('terms', 'Fee80')}</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-medium mb-3">
          {t('terms', 'ConditionsTitle')}
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>{t('terms', 'Cond1')}</li>
          <li>{t('terms', 'Cond2')}</li>
          <li>{t('terms', 'Cond3')}</li>
          <li>{t('terms', 'Cond4')}</li>
          <li>{t('terms', 'Cond5')}</li>
          <li>{t('terms', 'Cond6')}</li>
          <li>{t('terms', 'Cond7')}</li>
          <li>{t('terms', 'Cond8')}</li>
          <li>{t('terms', 'Cond9')}</li>
          <li>{t('terms', 'Cond10')}</li>
        </ol>
      </section>
    </main>
  )
}
