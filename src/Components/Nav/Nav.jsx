import React, { useState } from "react";
import { motion } from "framer-motion";
import css from "../Nav/Nav.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MediaQuery from 'react-responsive'

function Nav() {
  const [visible, setVisible] = useState(true);
  console.log("visible===", visible);

  const variants = {
    open: { opacity: 0, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  


  return (
    <>
      <motion.nav
        onHoverEnd={() => setVisible(true)}
        animate={visible ? "open" : "close"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <motion.div className={css.innerNav}>
          <ul>
            <motion.li
              whileHover={{ backgroundColor: "rgb(244, 166, 98, 1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="#">Home</a>
            </motion.li>
            <motion.li
              whileHover={{ backgroundColor: "rgb(244, 166, 98, 1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="#">Home</a>
            </motion.li>
            <motion.li
              whileHover={{ backgroundColor: "rgb(244, 166, 98, 1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="#">Home</a>
            </motion.li>
            <motion.li
              whileHover={{ backgroundColor: "rgb(244, 166, 98, 1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="#">Gallery</a>
            </motion.li>
            <motion.li
              whileHover={{ backgroundColor: "rgb(244, 166, 98, 1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="#">Contacts</a>
            </motion.li>
          </ul>
        </motion.div>
      </motion.nav>
      <MediaQuery minWidth={1080}>
      <motion.button
        className={css.toggle}
        onHoverStart={() => setVisible((visible) => !visible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {visible ? <MenuIcon /> : <CloseIcon />}
      </motion.button>
      </MediaQuery>
      <MediaQuery maxWidth={1080}>
      <motion.button
        className={css.toggle}
        onClick={() => setVisible((visible) => !visible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {visible ? <MenuIcon /> : <CloseIcon />}
      </motion.button>
      </MediaQuery>
    </>

  );
}

export default Nav;
