import React from 'react'
import { useTranslation } from 'react-i18next'

function Installation() {
    const {t} = useTranslation()

  return (
    <div>
    <div>{t('Instalation1')}</div>
    </div>
  )
}

export default Installation