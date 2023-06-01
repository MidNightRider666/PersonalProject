import React, { useCallback, useEffect, useState } from "react";
import { arrSlideImages } from "../../Data/Data.jsx";
import css from "../Main/Main.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import About from "../About/About.jsx";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import i18n from "i18next";

function Main() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  const reference = useRef();
  const { ref: newRef, inView: myElementIsVisible } = useInView();
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      reference.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      newRef(node);
    },
    [newRef]
  );

  const animations = {
    initial: {
      x: 300,
      opacity: 0,
    },
    animate: {
      zIndex: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      x: -300,
      transition: {
        duration: 0.8,
      },
    },

    // initial: {
    //   opacity: 0,
    //   scale: 0.5,
    // },
    // animate: {
    //   opacity: 1,
    //   scale: 1,
    //   transition: {
    //     type: "tween",
    //     duration: 1,
    //   },
    // },
    // exit: {
    //   opacity: 1,
    //   scale: 0,
    //   transition: {
    //     type: "tween",
    //     duration: 1,
    //   },
    // },
  };
  const [currentSlide, setCurrentSlide] = useState(arrSlideImages[0]);
  console.log(" currentSlide===", currentSlide);

  useEffect(() => {
    setCurrentSlide(arrSlideImages[0]);
  }, []);

  const handleclick = (index) => {
    const slider = arrSlideImages[index];
    setCurrentSlide(slider);
    return;
  };

  const scrollClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollClickNew = () => {
    reference.current?.scrollIntoView({ behavior: "smooth" });
  };

  function setUrl(data) {
    switch (data) {
      case 0:
        return `/${i18n.language}/Installation`;
      case 1:
        return `/${i18n.language}/Turkish`;
      case 2:
        return `/${i18n.language}/Turkish`;
    }
    console.log(data);
  }

  return (
    <div>
      <div ref={setRefs} className={css.slider}>
        <AnimatePresence>
          <div className={css.slide} key={currentSlide.id}>
            <motion.img
              variants={animations}
              className={css.mainImg}
              key={currentSlide.id}
              animate="animate"
              initial="initial"
              exit="exit"
              src={currentSlide.url}
              alt="img"
            />
            <div className={css.content}>
              <img className={css.icon} src={currentSlide.icon} alt="icon" />
              <NavLink className={css.Link} to={setUrl(currentSlide.id)}>
                <h2 className={css.caption}>{currentSlide.caption(t)}</h2>
              </NavLink>
              {/* <h2 className={css.caption}>{currentSlide.caption(t)}</h2> */}
            </div>
          </div>
        </AnimatePresence>
        <div className={css.thumbbox}>
          {arrSlideImages.map((data, i) => {
            return (
              <div className={css.thumbnail} key={data.id}>
                <img
                  className={
                    currentSlide.id === i ? css.clicked : css.notclicked
                  }
                  src={data.url}
                  onClick={() => handleclick(i)}
                  alt="thumbnail"
                  height="120"
                  width="150"
                />
                <h2
                  onClick={() => handleclick(i)}
                  className={css.thumbnailTital}
                >
                  {data.caption(t)}
                </h2>
              </div>
            );
          })}
        </div>
        <motion.div
          layout
          data-isopen={isOpen}
          initial={{ borderRadius: 50 }}
          onHoverStart={() => setIsOpen(!isOpen)}
          onHoverEnd={() => setIsOpen(!isOpen)}
          onClick={scrollClick}
          className={css.parent}
        >
          <div className={css.child}>
            <p></p>
          </div>
        </motion.div>
      </div>
      <div ref={ref}>
        <About />
      </div>
      <motion.div
        onClick={scrollClickNew}
        className={`${css.Back} ${myElementIsVisible ? "" : css.fadeIn}`}
      >
        <div className={css.top}>
          <p>Top</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Main;
