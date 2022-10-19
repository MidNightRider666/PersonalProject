import React, { useEffect, useState } from 'react'
import slideImages from '../../Data/Data.jsx'
import css from '../Main/Main.module.scss'
import Button from '../../Components/Button/Button.jsx'
import { motion } from "framer-motion"




function Main() {

  const animations = {
    initial: {
      x:200,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -200,
      opacity: 0
    }
  }

        const [currentSlide, setCurrentSlide] = useState(slideImages[0])

         
        useEffect(() => {
                setCurrentSlide(slideImages[0])
              }, [])

        const handleclick=(index) => {
                const slider = slideImages[index]
                console.log(slider);
                setCurrentSlide(slider)
                return
        }
    
       return (
        <div className={css.slider}>
                <div className={css.slide} key={currentSlide.id}>
                   <motion.img variants={animations}
                   animate='animate'
                   initial='initial'
                   exit='exit'
                   src={currentSlide.url} alt="img" />
                    <div className={css.content}>
                      <h2>{currentSlide.caption}</h2>
                      <p>{currentSlide.desc}</p>
                      <hr />
                      <Button btnPrimary>Learn more</Button>        
        </div>
        </div>    
        {
              slideImages.map((data, i) => {
                return (
              <div className={css.thumbnail}>
                <img className={currentSlide.id == i ? css.clicked : css.notclicked} key={data.id} src={data.url} onClick={() => handleclick(i)} alt="thumbnail" height='120' width='150'/>
                </div>
                )
              }
              )
        }
        </div>
       )
}

export default Main