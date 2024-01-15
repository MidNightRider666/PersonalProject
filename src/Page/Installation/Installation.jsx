import React from "react";
import { useTranslation } from "react-i18next";
import SecondNav from "../../Components/SecondNav/SecondNav";
import css from "./Installation.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Installation() {
  const { t } = useTranslation();
  const { ref: newRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: newRef1, inView: myElementIsVisible1 } = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <SecondNav />
      <h1 className={css.pageTitle}>{t("Instalation")}</h1>
      <hr className={css.firstHr} />
      <div className={css.block}>
        <p className={css.firstPara}>
        {t("Instalation2")}
        </p>
        <img
          className={css.image}
          src="https://lisamora.lt/wp-content/uploads/2015/12/6-1024x682.jpg"
          alt=""
        />
      </div>
      <div
        ref={newRef}
        className={`${myElementIsVisible ? css.slideRight : ""}`}
      >
        <h1 className={css.startSecondPr}>
        {t("Instalation3")}
        </h1>
        <hr className={css.secondHr} />
      </div>
      <div ref={newRef1} className={css.list}>
        <ul>
          <li id={`${myElementIsVisible1 ? css.firstLi : ""}`}>
          {t("Instalation4")}
          </li>
          <li id={`${myElementIsVisible1 ? css.secondLi : ""}`}>
          {t("Instalation5")}
          </li>
          <li id={`${myElementIsVisible1 ? css.thirdLi : ""}`}>
          {t("Instalation6")}
          </li>
          <li id={`${myElementIsVisible1 ? css.fourthLi : ""}`}>
          {t("Instalation7")}
          </li>
        </ul>
        <img
          className={`${css.imageSecond} ${
            myElementIsVisible1 ? css.imgAnimation : ""
          }`}
          src="https://lisamora.lt/wp-content/uploads/2015/12/3.18-1024x683.jpg"
          alt=""
        />
      </div>
      <hr className={css.thirdHr} />
      <div className={css.block}>
        <img
          className={css.image}
          src="https://lisamora.lt/wp-content/uploads/2015/12/3.18-1024x683.jpg"
          alt=""
        />
        <h1 className={css.lastSentence}>
        {t("Instalation8")}
        </h1>
      </div>
    </div>
  );
}

export default Installation;

{
  //  <li className={`${myElementIsVisible1 ? css.firtLi : ""}`}>Atvyksime į Jūsų objektą, išmatuosime patalpas.</li>
  // <li className={`${myElementIsVisible1 ? css.secondLi : ""}`}>
  //   Pasiūlysime kelis suomiškos, rusiškos ar garinės/turkiškos pirties
  //   projektų variantus, suderinsime mūsų idėjas ir Jūsų lūkesčius.
  //   Suomišką, rusišką ar garinę/turkišką pirtį įrengsime pagal
  //   individualius užsakymus.
  // </li>
  // <li className={`${myElementIsVisible1 ? css.thirdLi : ""}`}>
  //   Pakonsultuosime suomiškos, rusiškos ar garinės/turkiškos pirties
  //   įrengimo klausimais. Parduosime visą suomiškos, rusiškos ar
  //   garinės/turkiškos pirties įrengimui būtiną įrangą.
  // </li>
  // <li className={`${myElementIsVisible1 ? css.fourthLi : ""}`}>
  //   Patys pagaminsime suomiškos, rusiškos ar garinės/turkiškos pirties
  //   sienų, lubų, gultų formas.
  // </li>
}
