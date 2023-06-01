import React from "react";
import { useTranslation } from "react-i18next";
import SecondNav from "../../Components/SecondNav/SecondNav";
import css from "./Installation.module.scss";

function Installation() {
  const { t } = useTranslation();

  return (
    <div>
      <SecondNav />
      <h1 className={css.pageTitle}>Instalation of baths</h1>
      <hr className={css.firstHr} />
      <div className={css.block}>
        <p className={css.firstPara}>
          Pirčių įrengimas, kaip ir bet kurie kiti remonto ar statybos darbai,
          turi būti atliekami pagal technologijas, bei laikantis visų privalomų
          normatyvų. Daugelį metų tobulinome savo įgūdžius, bei sukaupėme didelę
          teorinę ir praktinę patirtį suomiškų, rusiškų ir garinių/turkiškų
          pirčių projektavime ir įrengime. Pirčių įrengimas atliekamas laikantys
          statybinių ir priešgaisrinių normatyvų. Pirties įrengimo procese
          dalyvaujame nuo pradžios iki pabaigos, todėl esame tikri, kad
          pasiūlysime Jums tokius sprendimus, kurie optimaliai atitiks Jūsų
          suomiškos, rusiškos ar garinės/turkiškos pirties lūkesčius, bei bus
          patikimi ir saugūs. Suomišką, rusišką bei garinę/turkišką pirtį galime
          įrengti namuose, lauko statiniuose, viešbučiuose, butuose bei kitose
          įprastose ar netradicinėse patalpose.
        </p>
        <img
          className={css.image}
          src="https://lisamora.lt/wp-content/uploads/2015/12/6-1024x682.jpg"
          alt=""
        />
      </div>
      <h1 className={css.startSecondPr}>
        {" "}
        Pirčių įrengimas ir projektavimas. Ką mes siūlome?{" "}
      </h1>
      <hr className={css.secondHr} />
      <div className={css.list}>
        <ul>
          <li> 
          Atvyksime į Jūsų objektą, išmatuosime patalpas.
          </li>
          <li>
          Pasiūlysime kelis
        suomiškos, rusiškos ar garinės/turkiškos pirties projektų variantus,
        suderinsime mūsų idėjas ir Jūsų lūkesčius. Suomišką, rusišką ar
        garinę/turkišką pirtį įrengsime pagal individualius užsakymus.
          </li>
          <li>
          Pakonsultuosime suomiškos, rusiškos ar garinės/turkiškos pirties
        įrengimo klausimais. Parduosime visą suomiškos, rusiškos ar
        garinės/turkiškos pirties įrengimui būtiną įrangą.
          </li>
          <li>
          Patys pagaminsime
        suomiškos, rusiškos ar garinės/turkiškos pirties sienų, lubų, gultų
        formas.
          </li>
        </ul>
      </div>
      <hr className={css.thirdHr}/>
      <div className={css.block}>
        <img className={css.image} src="https://lisamora.lt/wp-content/uploads/2015/12/3.18-1024x683.jpg" alt="" />
      <h1 className={css.lastSentence}>
      Ne tik garantinio laikotarpio metu atliksime remonto darbus,
        padėsime išspręsti iškilusias problemas, jei įmanoma sutaisysime Jūsų
        suomiškos, rusiškos ar garinės/turkiškos pirties įrangą!!!!
      </h1>
      </div>
    </div>
  );
}

export default Installation;
