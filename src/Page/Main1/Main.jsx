import React, { useEffect, useState } from 'react'
import slideImages from '../../Data/Data.jsx'
import css from '../Main/Main.module.scss'
import {AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Button from '../../Components/Button/Button.jsx'


function Main() {
    const autoScroll = false
    let sldeInterval;
    let intervalTime = 8000;

    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLenght = slideImages.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLenght -1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLenght - 1 : currentSlide - 1)
  }

    useEffect(() => {
      setCurrentSlide(0)
    }, [])

    useEffect(() => {
      if (autoScroll) {
        auto()
      }
      return() => clearInterval(sldeInterval)
    }, [currentSlide])
    
    function auto() {
      sldeInterval = setInterval(nextSlide, intervalTime)
    }

    return (
        <div className={css.slider}>
            <AiOutlineArrowLeft className={`${css.arrow} ${css.left}`} onClick={prevSlide}/>
            <AiOutlineArrowRight className={`${css.arrow} ${css.right}`} onClick={nextSlide}/>

            {slideImages.map((slide, index) => {
              const classIndex = index === currentSlide ? `${css.slide} ${css.current}` : css.slide 
              return (
                <div className={classIndex} key={slide.id}>
                  {index === currentSlide && (
                    <>
                    <img src={slide.url} alt="img" />
                    <div className={css.content}>
                      <h2>{slide.caption}</h2>
                      <p>{slide.desc}</p>
                      <hr />
                      <Button btnPrimary>Learn more</Button>
                    </div>
                    </>
                  )}
                </div>
              )
            })}
        </div>
      )
}

export default Main