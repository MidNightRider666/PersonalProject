import React, { useEffect, useReducer, useState } from 'react'
import slideImages from '../../Data/Data.jsx'
import css from '../Main2/Main.module.scss'
import Button from '../../Components/Button/Button.jsx'


function Main() {

        const [currentSlide, setCurrentSlide] = useState(slideImages[0])

         
        useEffect(() => {
                setCurrentSlide(slideImages[0])
              }, [])

        const handleclick=(index) => {
                const slider = slideImages[index]
                setCurrentSlide(slider)
        }

        useEffect(() => {
                setCurrentSlide(slideImages[0])
              }, [])
    
       return (
        <div className={css.slider}>
                <div className={css.slide}>
                   <img src={currentSlide.url} alt="img" />
                    <div className={css.content}>
                      <h2>{currentSlide.caption}</h2>
                      <p>{currentSlide.desc}</p>
                      <hr />
                      <Button btnPrimary>Learn more</Button>        
        </div>
        </div>    
        {
              slideImages.map((data, i) => 
              <div className={css.thumbnail}>
                <img className={currentSlide.id == i ? css.clicked : css.notclicked} key={data.id} src={data.url} onClick={() => handleclick(i)} alt="thumbnail" height='120' width='150'/>
                </div>
              )
        }
        </div>
       )
}

export default Main