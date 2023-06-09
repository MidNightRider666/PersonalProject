import React, { useEffect, useRef } from "react";
import SecondNav from "../../Components/SecondNav/SecondNav";
import css from "./Turkish.module.scss";
import OldTurkish from "./OldTurkish";
import NewTurkish from "./NewTurkish";
import { useState } from "react";




function Turkish() {

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

  console.log("actvie===", active);


  return (
    <div>
    <SecondNav/>
    <h1 className={css.title}>Turkish Bath</h1>
    <div className={css.gallery}>
    <img onClick={() => SetView(2)} className={css} src="https://lisamora.lt/wp-content/uploads/2015/12/3.17-1024x680.jpg" alt="" />
    <img onClick={() => SetView(1)} className={css} src="https://blog.thermasol.com/wp-content/uploads/2019/02/1-header-3.jpg" alt="" />
    </div>
    {ActiveView()}
    </div>
  );

}

  

export default Turkish;
