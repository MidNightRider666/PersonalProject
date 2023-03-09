import React, { useEffect, useState } from 'react'
import  {arrSlideImages} from '../../Data/Data.jsx'
import css from '../Main/Main.module.scss'
import Button from '../../Components/Button/Button.jsx'
import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from 'react-i18next'





function Main() {

const {t} = useTranslation()


  const animations = {
    initial: {
      opacity: 0, scale: 0.5
    },
    animate: {
      opacity: 1, scale: 1,
      transition: { 
        type:"tween",
        duration: 1
    }
    },
    exit: {
      opacity: 0, scale: 0.5,
      transition: { 
        type:"tween",
        duration: 1
    }
    }
  }
        const [currentSlide, setCurrentSlide] = useState(arrSlideImages[0])
      console.log(' currentSlide===', currentSlide.id);


        
         
        useEffect(() => {
                setCurrentSlide(arrSlideImages[0])
              }, [])

        const handleclick=(index) => {
                const slider = arrSlideImages[index]
                console.log(slider);
                setCurrentSlide(slider)
                return
        }
    
       return (
        <div className={css.slider}>
                <div className={css.slide}>
                <AnimatePresence>
                   <motion.img variants={animations}
                   key={currentSlide.id}
                   className={css.mainImg}
                   animate='animate'
                   initial='initial'
                   exit='exit'
                   src={currentSlide.url} alt="img" />
                    <div className={css.content}>
                    <img className={css.icon} src={currentSlide.icon} alt="icon" />
                      <h2>{currentSlide.caption(t)}</h2>
                      <p>{currentSlide.desc(t)}</p>
                      <hr />
                      <Button btnPrimary>Learn more</Button>        
        </div>
        </AnimatePresence>
        </div>   
        <div className={css.thumbbox}> 
        {
              arrSlideImages.map((data, i) => {
                return (
              <div className={css.thumbnail}>
                <img className={currentSlide.id == i ? css.clicked : css.notclicked} key={data.id} src={data.url} onClick={() => handleclick(i)} alt="thumbnail" height='120' width='150'/>
                </div>
                )
              }
              )
        }
        </div>
        </div>
       )
}

export default Main