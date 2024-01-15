import React from 'react'
import SecondNav from '../../Components/SecondNav/SecondNav'
import css from './Russian.module.scss'
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

function Russian() {
  const { ref: newRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  console.log("myElementIsVisible===", myElementIsVisible);

  const { t } = useTranslation();
  return (
    <div>
        <SecondNav/>
        <h1 className={css.title}>{t('RussianBath1')}</h1>
        <hr className={css.firstHr} /> 
        <div className={css.imgBlock}>
            <p className={css.russianText}>{t('RussianBath2')}</p>
            <img className={css.russianBath} src="http://lisamora.lt/wp-content/uploads/2015/12/1.1.jpg" alt="" />
        </div>
        <h2 className={css.russianBathExplTitle}>{t('RussianBath3')}</h2>
        <div ref={newRef}  className={css.textBox}>
        <p className={`${css.russianBathExpl} ${myElementIsVisible ? css.russianBathExpl1 : " "}`}>{t('RussianBath4')}</p>
        <p className={`${css.russianBathExpl} ${myElementIsVisible ? css.russianBathExpl2 : " "}`}>{t('RussianBath5')}</p>
        </div>
    </div>
  )
}

export default Russian