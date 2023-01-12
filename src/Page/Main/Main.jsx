import React, { useEffect, useState } from 'react'
import slideImages from '../../Data/Data.jsx'
import css from '../Main/Main.module.scss'
import Button from '../../Components/Button/Button.jsx'
import { motion } from "framer-motion"
import Nav from '../../Components/Nav/Nav.jsx'
import { useTranslation } from 'react-i18next'




function Main() {

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
    }
  }

        const [currentSlide, setCurrentSlide] = useState(slideImages[0])
        const { t } = useTranslation()

         
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
          <Nav/>
                <div className={css.slide} key={currentSlide.id}>
                   <motion.img variants={animations}
                   className={css.mainImg}
                   animate='animate'
                   initial='initial'
                   src={currentSlide.url} alt="img" />
                    <div className={css.content}>
                    <img className={css.icon} src={currentSlide.icon} alt="icon" />
                      <h2>{t('caption')}</h2>
                      <p>{currentSlide.desc}</p>
                      <hr />
                      <Button btnPrimary>Learn more</Button>        
        </div>
        </div>   
        <div className={css.thumbbox}> 
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
        </div>
       )
}

export default Main