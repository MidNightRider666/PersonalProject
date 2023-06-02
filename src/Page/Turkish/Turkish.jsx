import React from 'react'
import SecondNav from '../../Components/SecondNav/SecondNav'
import css from './Turkish.module.scss'

function Turkish() {




  return (
    <div>
      <SecondNav/>
      <h1 className={css.title}>Turkish Bath</h1>
      <hr className={css.firstHr} />
      <div className={css.gallery}>
      <img className={css} src="https://lisamora.lt/wp-content/uploads/2015/12/3.17-1024x680.jpg" alt="" />
      <img className={css} src="https://blog.thermasol.com/wp-content/uploads/2019/02/1-header-3.jpg" alt="" />
      </div>
      <div className={css.wrap}>
        <div className={css.box}>
      <h1 className={css.firstParaTitle}>The old ways</h1>
      <p className={css.firstPara}>Turkiškos pirties istorija siekia labai tolimus laikus, kai turkai dar nebuvo pasiekę Antalijos. Atvykę į Antaliją jie su savimi atsinešė senovines tradicijas, o taip pat susidūrė su kita tradicija – romų ir Bizantijos. Šių dviejų tradicijų mišinys leido atsirasti naujai Turkiškos pirties koncepcijai. Iš pradžių pirtis iš apačios būdavo šildoma šiltu oru, kuris patekdavo per specialius vamzdžius, kurie būdavo paslėpti po marmurinėmis pirties grindimis. Be to turkiška pirtis dar būdavo kaitinama didžiulio katilo pagalba, kuris būdavo įmontuojamas į sieną. Šis katilas atliko garų gamintojo vaidmenį. Vanduo katile virdavo (po juo būdavo krosnis), o susidarę garai patekdavo pro pakankamai nemažą angą, esančią maždaug pusantro metro aukštyje.</p>
      </div>
      <img className={css.oldBath} src="https://blog.thermasol.com/wp-content/uploads/2019/02/1-header-3.jpg" alt="" />
      </div>
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

export default Turkish