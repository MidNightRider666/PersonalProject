import React from 'react';
import { useTranslation } from 'react-i18next';
import css from './SecondNav.module.scss'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import i18n from "i18next";

function SecondNav() {
    const {t} = useTranslation()

  return (
    <div>
      <div className={css.navImg}>
        <NavLink className={css.link} to={`/${i18n.language}`}>
        <img className={css.icon} src='http://lisamora.lt/wp-content/uploads/2017/05/lisamora-logo.png' alt="icon" />
        </NavLink>
        <h3 className={css.description}>{t('Nav')}</h3>
      </div>
    </div>
  )
}

export default SecondNav