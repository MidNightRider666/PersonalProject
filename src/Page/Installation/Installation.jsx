import React from 'react';
import { useTranslation } from 'react-i18next';
import SecondNav from '../../Components/SecondNav/SecondNav';

function Installation() {
    const {t} = useTranslation()

  return (
    <div>
      <SecondNav/>
    <div>{t('Instalation1')}</div>
    </div>
  )
}

export default Installation