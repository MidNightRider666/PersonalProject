import React, { useEffect, useRef, useState } from "react";
import css from "../About/About.module.scss";
import { useTranslation } from "react-i18next";
import { useInView } from 'react-intersection-observer';

function About() {

  const {t} = useTranslation()

  const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce: true});
  const { ref: newREf, inView: newSectionIsVisible} = useInView({triggerOnce: true});

  return (
    <div className={css.body}>
    <div className={css.aboutBody}>
      <h1 className={css.title}>About Us</h1>
      <hr className={css.firstHr} />
      <div ref={myRef}  className={css.aboutDesc}>
        <p className={`${css.aboutText} ${myElementIsVisible ? css.fadeIn: ''}`}>
          {t('About')}
        </p>
        <img
          className={`${css.aboutImg} ${myElementIsVisible ? css.fadeIn: ''}`}
          src="http://lisamora.lt/wp-content/uploads/2015/11/masinos-570x370.jpg"
          alt="Lisamora"
        />
      </div>
      <div ref={newREf}className={css.aboutDesc}>
        <img
          className={`${css.aboutImg} ${newSectionIsVisible ? css.fadeIn: ''}`}
          src="https://s3.eu-central-1.amazonaws.com/rinka-lt/public/media/advertisements/24158092/conversions/Vilnius-gallery_preview.jpg"
          alt="Lisamora"
        />
                <p className={`${css.aboutText} ${newSectionIsVisible ? css.fadeIn: ''}`}>
          {t('About1')}
        </p>
      </div>
      <div className={css.lastSentence}>
    <h3>
        Contact us and we will make sure your wishes become a reality.
        </h3>
        </div>
    </div>
    </div>
  );
}

export default About;
