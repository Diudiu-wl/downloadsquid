
import React from "react";
import { useNavigate } from "react-router-dom";
import i18n from '../i18n';
import { useTranslation } from "react-i18next";
import "./Octo.css";

function Octo() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  

  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage) {
    i18n.changeLanguage(savedLanguage); // 设置语言
  }


  return (
    <div className="octo-container">
      <div className="container">
        <h1>{t("congrats")}</h1>
        <p>{t("instruct")}</p>
        <div>
          <button
            className="windows"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/xiaozhangyu.exe`}
          >
            Windows
          </button>
          <button
            className="macos"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/xiaozhang.dmg.zip`}
          >
            MacOS
          </button>
        </div>
      </div>
 
      <button onClick={() => navigate('/')} className="back-button">
      {t("back")}
      </button>
    </div>
  );
}

export default Octo;
