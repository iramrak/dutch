'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

export default function Terms() {
  const t = useTranslations('terms')

  return (
    <main className="max-w-3xl mx-auto my-[50px] p-6 leading-relaxed text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        {t('Title')}
      </h1>

      <h2 className="text-2xl font-semibold mb-4">
        {t('SubTitle')}
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-medium mb-2">
          {t('FeesTitle')}
        </h3>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>{t('Fee60')}</li>
          <li>{t('Fee80')}</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-medium mb-3">
          {t('ConditionsTitle')}
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>{t('Cond1')}</li>
          <li>{t('Cond2')}</li>
          <li>{t('Cond3')}</li>
          <li>{t('Cond4')}</li>
          <li>{t('Cond5')}</li>
          <li>{t('Cond6')}</li>
          <li>{t('Cond7')}</li>
          <li>{t('Cond8')}</li>
          <li>{t('Cond9')}</li>
          <li>{t('Cond10')}</li>
        </ol>
      </section>
    </main>
  )
}
