import React, { useEffect, useRef } from "react";
import SecondNav from "../../Components/SecondNav/SecondNav";
import css from "./NewTurkish.module.scss";


function NewTurkish() {


  const headerRef = useRef();
  const headerRef1 = useRef();
  function ScrollHeight() {
    var content = headerRef.current
    var container = headerRef1.current

    content.style.height = container.offsetHeight + 'px';
  }


  useEffect(()=>{
    ScrollHeight()
    }, [])

  return (
    <div>
    <div className={css.body}>
    <main>
      <div ref={headerRef} id={css.parchment}></div>
      <div ref={headerRef1} id={css.contain}>
        <p>
        Turkiškos pirties istorija siekia labai tolimus laikus, kai turkai dar nebuvo pasiekę Antalijos. Atvykę į Antaliją jie su savimi atsinešė senovines tradicijas, o taip pat susidūrė su kita tradicija – romų ir Bizantijos. Šių dviejų tradicijų mišinys leido atsirasti naujai Turkiškos pirties koncepcijai. Iš pradžių pirtis iš apačios būdavo šildoma šiltu oru, kuris patekdavo per specialius vamzdžius, kurie būdavo paslėpti po marmurinėmis pirties grindimis. Be to turkiška pirtis dar būdavo kaitinama didžiulio katilo pagalba, kuris būdavo įmontuojamas į sieną. Šis katilas atliko garų gamintojo vaidmenį. Vanduo katile virdavo (po juo būdavo krosnis), o susidarę garai patekdavo pro pakankamai nemažą angą, esančią maždaug pusantro metro aukštyje.
        </p>
        {/* <img className={css.image} src="https://blog.thermasol.com/wp-content/uploads/2019/02/1-header-3.jpg" alt="" /> */}
      </div>
      </main>
      <svg>
        <filter id="wavy2">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          />
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
      </div>
    </div>
  );
}

export default NewTurkish