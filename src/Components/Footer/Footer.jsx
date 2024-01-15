import React from 'react'
import css from '../Footer/Footer.module.scss'
import { NavLink, Link } from 'react-router-dom/cjs/react-router-dom.min'
import i18next from "i18next";

function Footer() {
  console.log("i18n111===", i18next.language);
  return (
    <div className={css.footer}>
      <hr className={css.footerHr}/>
      <div className={css.footerList}>
        <ul>
          <a className={css.navLink} href={`/${i18next.language}/Installation`}><li>Instalation</li></a>
          <a className={css.navLink} href={`/${i18next.language}/Turkish`}><li>Turkish Bath</li></a>
          <a className={css.navLink} href={`/${i18next.language}/Russian`}><li>Russian Bath</li></a>
          <a className={css.navLink} href={`/${i18next.language}/Finnish`}><li>Finnish Sauna</li></a>
          <a className={css.navLink} href={`/${i18next.language}/Contacts`}><li>Contacts</li></a>
        </ul>
      </div>
        <p className={css.footerText}>© 2023 Lisamora All rights reserved.</p>
        </div>
  )
}

export default Footer