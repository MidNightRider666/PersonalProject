import React from "react";
import { Snackbar } from "@mui/material";
import SecondNav from "../../Components/SecondNav/SecondNav";
import css from "./Contacts.module.scss";
import { contactsdata } from "../../Data/ContactsData.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Contacts() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(contactsdata);
  console.log(" currentSlide===", currentSlide);

  const [open, setOpen] = useState(false);
  console.log("open===", open);

  useEffect(() => {
    setCurrentSlide(contactsdata);
  }, []);

  console.log(" currentSlide===", currentSlide);
  return (
    <div>
      <SecondNav />
      <div>
        <div>
          <div className={css.layoutRow}></div>
        </div>
        <div>
        <h2 className={css.contactsTeam}>{t("Contacts7")}</h2>
        <hr className={css.firstHr} />
        </div>
        {contactsdata.map((data, i) => {
          return (
            <div className={css.contactsBox} key={data.id}>
              <ul>
                <div>
                  <h1 className={css.contactsTitle}>{data.Name}</h1>
                </div>
                <li>
                  <p className={css.contactsDesc}>
                    <strong>{data.Title(t)}</strong>
                    <br />
                    {data.Mobile(t)}
                    <br />
                    <button
                      onClick={() =>
                        setOpen(true) +
                        navigator.clipboard.writeText(
                          `${data.Email(t).slice(7)}`
                        )
                      }
                      className={css.btn}
                    >
                      {data.Email(t)}
                    </button>
                  </p>
                </li>
              </ul>
              <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={2000}
                className={css.message}
                message="Copied to clipboard"
              ></Snackbar>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contacts;
