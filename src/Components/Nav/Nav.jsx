import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import css from "../Nav/Nav.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MediaQuery from "react-responsive";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import i18next from "i18next";
import { NavLink, Link } from "react-router-dom";
import i18n from "i18next";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "lt",
    name: "Lietuviu",
    country_code: "lt",
  },
  {
    code: "ru",
    name: "русский",
    country_code: "ru",
  },
];



const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="salmon"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
);

function Nav() {
  const pathName = window.location.pathname
  const halfPathName = pathName.slice(4)
  console.log(' halfPathName===', halfPathName);
  const activeStyle = { color: 'blue' };
  const currentLanguageCode = cookies.get("i18next") || "lt";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();


  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  

  const [visible, setVisible] = useState(true);
  console.log("visible===", visible);

  const variants = {
    open: { opacity: 0, x: 0 },
    closed: { display: 0, x: "-100%" },
  };
  console.log("i18n111===", i18next.language);
  console.log("i18n===", i18n.language);

  return (
    <>
      <motion.nav
        onHoverEnd={() => setVisible(true)}
        animate={visible ? "open" : "close"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <motion.div className={css.innerNav} disabled={visible}>
          <ul>
            <motion.li 
              whileHover={{ backgroundColor: "rgb(244, 166, 98, 1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink  className={css.Link} to={`/${i18n.language}/Installation`} activeStyle={activeStyle}>{t('Instalation')}</NavLink>
            </motion.li>
            <motion.li
              whileHover={{ backgroundColor: "rgb(244, 166, 98, 1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink  to={`/${i18n.language}/Turkish`} activeStyle={activeStyle}>{t('captions')}</NavLink>
            </motion.li>
            <motion.li
              whileHover={{ backgroundColor: "rgb(244, 166, 98, 1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink to={`/${i18n.language}/Finnish`} activeStyle={activeStyle}>{t('captions2')}</NavLink>
            </motion.li>
            <motion.li
              whileHover={{ backgroundColor: "rgb(244, 166, 98, 1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink to={`/${i18n.language}/Russian`} activeStyle={activeStyle}>{t('RussianBath1')}</NavLink>
            </motion.li>
            <motion.li
              whileHover={{ backgroundColor: "rgb(244, 166, 98, 1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink to={`/${i18n.language}/Contacts`} activeStyle={activeStyle}>{t('Contacts')}</NavLink>
            </motion.li>
          </ul>
        </motion.div>
        <div className="container">
          <div className="language-select">
            <div className="d-flex align-items-center language-select-root">
              <div className="dropdown">
                <button
                  disabled={visible}
                  className="btn btn-link dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <GlobeIcon />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <span className="dropdown-item-text">{t('Language')}</span>
                  </li>
                  {languages.map(({ code, name, country_code }) => (
                    <li key={country_code}>
                      <button
                        className={classNames("dropdown-item", {
                          disabled: currentLanguageCode === code,
                        })}
                        onClick={() => {
                          // const hostnametest = `${savedHostname}/${code}/${halfPathName}`
                          // const savedhostnametest = `${savedHostname}`
                          // const codetest = `${code}`
                          // const halfpathnametest = `${halfPathName}`
                          i18next.changeLanguage(code);
                          window.history.replaceState(null, "", `${""}/${code}/${halfPathName}`)
                          window.location.reload();
                          // window.location.assign(`${""}/${code}/${halfPathName}`);
                          // console.log("Testing: ", hostnametest)
                          // console.log("Testing2: ", savedhostnametest, codetest, halfpathnametest)
                        }}
                      >
                        <span
                          className={`fi fi-${country_code} fis" mx-2`}
                          style={{
                            opacity: currentLanguageCode === code ? 0.5 : 1,
                          }}
                        ></span>
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
      <MediaQuery minWidth={1080}>
        <motion.button
          className={css.toggle}
          onHoverStart={() => setVisible((visible) => !visible)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {visible ? <MenuIcon /> : <CloseIcon />}
        </motion.button>
      </MediaQuery>
      <MediaQuery maxWidth={1080}>
        <motion.button
          className={css.toggle}
          onClick={() => setVisible((visible) => !visible)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {visible ? <MenuIcon /> : <CloseIcon />}
        </motion.button>
      </MediaQuery>
    </>
  );
}

export default Nav;
