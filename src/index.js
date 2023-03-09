import React from "react";
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({ 
    suportedLngs: ['en', 'lt', 'ru'],
    fallbackLng: "lt",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translations.json',
    },
    react: {useSuspense: false}
  });

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    {" "}
    <App tab="home" />{" "}
  </BrowserRouter>
);