import React, { useState } from 'react'
import css from "./Turkish.module.scss";
import SecondNav from '../../Components/SecondNav/SecondNav'
import { arrTurkishData } from "../../Data/TurkishData.jsx";
import { useEffect } from 'react';

function Turkish() {

  const [currentSlide, setCurrentSlide] = useState(arrTurkishData[0]);
  console.log(" currentSlide===", currentSlide);

  useEffect(() => {
    setCurrentSlide(arrTurkishData[0]);
  }, []);

  const handleclick1 = () => {
    const slider = arrTurkishData[0];
    setCurrentSlide(slider);
    return;
  };

  
  const handleclick2 = () => {
    const slider = arrTurkishData[1];
    setCurrentSlide(slider);
    return;
  };



  return (
    <div>
    <SecondNav/>
    <h1 className={css.title}>Turkish Bath</h1>
    <hr className={css.firstHr} />
    <div className={css.imgBlock}>
      <div className={css.firstBlock}>
      <img onClick={handleclick1} className={css.images}  src="https://blog.thermasol.com/wp-content/uploads/2019/02/1-header-3.jpg" alt="" />
      </div>
      <div className={css.secondBlock}>
      <img onClick={handleclick2} className={css.images} src="https://lisamora.lt/wp-content/uploads/2015/12/3.17-1024x680.jpg" alt="" />
      </div>
    </div>
    <div className={css.contain}
    >
          <div className={currentSlide.id === 0 ? css.parchment : ''}></div>
    <p className={`${css.oldtext} ${currentSlide.id === 0 ? css.old : css.new}`}>
       {currentSlide.desc}
        </p>
    </div>
    </div>
  )
}

export default Turkish