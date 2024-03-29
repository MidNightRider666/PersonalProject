import React, { useEffect, useRef } from "react";
import SecondNav from "../../Components/SecondNav/SecondNav";
import css from "./Turkish.module.scss";
import OldTurkish from "./OldTurkish";
import NewTurkish from "./NewTurkish";
import { useState } from "react";




function Turkishtest() {

    const [active, setActive] = useState(1);
  const SetView = (active) => {
    setActive(active);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <OldTurkish />;
      case 2:
        return <NewTurkish />;
    }
  };



  return (
    <div>
    <SecondNav/>
    <h1 className={css.title}>Turkish Bath</h1>
    <div className={css.gallery}>
    <img className={css.img1} onClick={() => SetView(2)} src="https://lisamora.lt/wp-content/uploads/2015/12/3.17-1024x680.jpg" alt="" />
    <h2 onClick={() => SetView(2)} className={css.imgTital1}>New ways</h2>
    <img onClick={() => SetView(1)} src="https://blog.thermasol.com/wp-content/uploads/2019/02/1-header-3.jpg" alt="" />
    <h2 onClick={() => SetView(1)} className={css.imgTital2}>Old ways</h2>
    </div>
    {ActiveView()}
    </div>
  );

}

  

export default Turkishtest;
