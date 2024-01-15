import React from 'react'
import SecondNav from '../../Components/SecondNav/SecondNav'
import css from '../Finnish/Finnish.module.scss'

function Finnish() {
  return (
    <div>
      <SecondNav/>
      <h1 className={css.title}>Finnish Sauna</h1>
      <hr className={css.firstHr} /> 
      <div className={css.finnishBox}>
        <p className={css.finnishSum}>Kodėl suomiai eina į pirtį? Todėl, kad tai senas paprotys ir prie jo yra pratinama nuo vaikystės. Suomiška pirtis tai švara, sveikata, sielos ramybė, emocinis užtaisas ir įvairūs kiti malonumai.</p>
        <img className={css.finnishImg} src="http://lisamora.lt/wp-content/uploads/2018/06/suomiska-pirtis-840x424.jpg" alt="" />
      </div>
    </div>
  )
}

export default Finnish