import React, { useEffect, useRef } from "react";
import SecondNav from "../../Components/SecondNav/SecondNav";
import css from "./NewTurkish.module.scss";


function NewTurkish() {

  return (
    <div>
      <hr className={css.firstHr} />
      <div className={css.wrap}>
        <div className={css.box}>
      <h1 className={css.firstParaTitle}>The new ways</h1>
      <p className={css.firstPara}>Dabar turkiškos pirtys yra „sluoksniuoto torto“ tipo, susideda iš kokybiškos (dvisluoksnės) hidroizoliacijos, dvigubo šildymo, kaitinimo sistemos vandeniu arba elektra, paslėpto gelžbetoninėse konstrukcijose. Klasikinės lubos – kupolo formos, kad nutekėtų susidaręs kondensatas, kupolo apačioje yra pravedamas drenažas. Didelė drėgmė viduje pasiekiama garų generatoriaus dėka, aromatus pirtyje generuoja aromatų dozatorius. Apšvietimas tiekiamas šilumai atspariomis, nuo drėgmės apsaugotomis lemputėmis (įgaunamas žvaigždėto dangaus efektas). Privalomai turi būti atvestos ventiliacijos ir kanalizacijos sistemos. Vidinis dizainas gali būti įvairus: europietiškas – mozaika, dekoratyvinės plytelės, neoninis apšvietimas, klasikinis – marmuras, kolonos, piliastrai, mozaikos gultas, dubenys apsiprausimui, fontanai.</p>
      </div>
      <img className={css.oldBath} src="https://lisamora.lt/wp-content/uploads/2015/12/3.17-1024x680.jpg" alt="" />
      </div>
    </div>
  )
}

export default NewTurkish