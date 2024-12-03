
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './Squid.css';

function Squid() {
  const [showAbout, setShowAbout] = useState(false);
  const [aboutImage, setAboutImage] = useState(null);  
  const [showModal, setShowModal] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showTooltip, setShowTooltip] = useState(false); 
  const [showMessage, setShowMessage] = useState(false); 
  const timeoutRef = useRef(null); // 引用保存计时器 ID
  const navigate = useNavigate(); 

  const { t, i18n } = useTranslation();

  const validCode = "6688"; 

  const handleMouseEnter = () => {
    setShowTooltip(true);

    // 开始计时
    timeoutRef.current = setTimeout(() => {
      setShowMessage(true); 
    }, 5000); // 5 秒后触发
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);

    // 鼠标移开时清除计时器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const closeMessage = () => {
    setShowMessage(false); 
  };



  const handleDownloadClick = () => {
    setShowModal(true); 
  };

  const handleConfirmCode = () => {
    if (codeInput === validCode) {
      navigate("/octo");
    } else {
      setErrorMessage(t("error"));
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setErrorMessage("");
    setCodeInput("");
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleConfirmCode();
    }
  };


  // 更改语言
  const changeLanguage = (lng) => {    
    i18n.changeLanguage(lng); // 切换语言
    localStorage.setItem('selectedLanguage', lng); // 存储语言到 localStorage
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showAbout && !event.target.closest(".about-author-container")) {
        setShowAbout(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showAbout]);
  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    if (!showAbout) {
      setAboutImage(`${process.env.PUBLIC_URL}/images/tapioca.png`);  
    } else {
      setAboutImage(null);  
    }
  };

  return (
    <div>
      {/* 左上角的语言切换菜单 */}
      <div className="language-menu">        
        <div className="language-switcher">
          <button className="language-button" onClick={() => changeLanguage('zh')}>中文</button>
          <button className="language-button" onClick={() => changeLanguage('en')}>English</button>
          <button className="language-button" onClick={() => changeLanguage('jp')}>日本語</button>
        </div>
      </div>
      <div className="container">
        <p>{t("note")}</p>
        <h1>{t("welcome")}</h1>
        <p>{t("describe")}</p>
        <div>
          <button
            className="windows"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/点击召唤小鱿鱼.exe`}
          >
            Windows
          </button>
          <button
            className="macos"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/xiaoyouyu.dmg.zip`}
          >
            MacOS
          </button>
        </div>

        <p>{t("octodescribe")}</p>
        <div>
        <button className="octo-download-button" onClick={handleDownloadClick}>
          {t("octodownload")}
        </button>
        </div>
        
      </div>

      

      {/* 输入领取码 */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{t("entercode")}</h2>
            <input
              type="text"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              onKeyDown={handleKeyDown} //回车监听
              placeholder="小章鱼领取码"
            />
            <button className="confirm-button" onClick={handleConfirmCode}>
             {t("confirm")}
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button className="cancel-button" onClick={closeModal}>
             {t("cancel")}
            </button>
          </div>
        </div>
      )}

      {/*
      
      <div className="text-button-container" style={{ position: "relative" }}>
      
        <button
          className="hover-button"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          打赏
        </button>

        {showTooltip && (
          <div className="tooltip">
            <div className="image-container">
              <div className="image-block">
                <p>微信：</p>
                <img
                  src={`${process.env.PUBLIC_URL}/images/wechat.jpg`}
                  alt="QR 1"
                  className="fixed-image"
                />
              </div>
              <div className="image-block">
                <p>支付宝：</p>
                <img
                  src={`${process.env.PUBLIC_URL}/images/alipay.jpg`}
                  alt="QR 2"
                  className="fixed-image"
                />
              </div>
            </div>
          </div>
        )}
      </div> */}
      
      {/* 文字部分 */}
      <div className="tutorial">

        {/* 打赏按钮 */}
        <div className="text-button-container" style={{ position: "relative" }}>
          <h2>{t("contact")}</h2> 
          <button
            className="hover-button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {t("donate")}
          </button>
        
          {showTooltip && (
            <div className="tooltip">
              <div className="image-container">
                <div className="image-block">
                  <p>{t("wechat")}</p>
                  <img
                    src = {`${process.env.PUBLIC_URL}${t('image')}`}
                    
                    alt="QR 1"
                    className="fixed-image"
                  />
                </div>
                <div className="image-block">
                  <p>{t("alipay")}</p>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/alipay.jpg`}
                    alt="QR 2"
                    className="fixed-image"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 弹窗显示 */}
          {showMessage && (
            <div className="message-popup">
              <div className="message-content">
                <p>{t("thank")}</p>
                <p>{t("code")}</p>
                <button onClick={closeMessage}>{t("close")}</button>
              </div>
            </div>
          )}

        </div>
        
        {/*MacOS教程*/}
        <h2>{t("wintip")}</h2> 
        <p>{t("notice")}</p>
        <h2>{t("mactip")}</h2>
        <div className="step">
          <span>{t("i1")}<strong>Applications</strong>{t("i2")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/1.jpg`} alt="Step 1" />
        </div>
        <div className="step">
          <span>{t("i3")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/2.jpeg`} alt="Step 2" />
        </div>
        <div className="step">
          <span>{t("i4")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/3.jpeg`} alt="Step 3" />
        </div>
        <div className="step">
          <span>{t("i5")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/4.jpeg`} alt="Step 4" />
        </div>
        <div className="step">
          <span>{t("i6")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/5.jpeg`} alt="Step 5" />
        </div>
        <div className="step">
          <span>{t("i7")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/6.jpg`} alt="Step 6" />
        </div>
      </div>

      {/*小鱿鱼额外的设置教程 */}
      <div className="tutorial">
        
        <h2>{t("macsetting")}</h2>
        <div className="step">
          <span>{t("s1")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/kk0.png`} alt="Step 1" />
        </div>
        <div className="step">
          <span>{t("s2")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/kk1.png`} alt="Step 2" />
        </div>
        <div className="step">
          <span>{t("s3")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/kk2.png`} alt="Step 3" />
        </div>
        <div className="step">
          <span>{t("s4")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/kk3.png`} alt="Step 4" />
        </div>
        <div className="step">
          <span>{t("s5")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/kk4.png`} alt="Step 5" />
        </div>

        
        
      </div>

      <div className="tutorial">
      <h2>{t("s6")}</h2>
      </div>

      <div className="about-author-container">
      <button onClick={handleAboutClick} className="about-button">
        {t("author")}
        </button>
        {showAbout && (
          <div className="about-info">
          <p>tapioca :</p>
          {aboutImage && <img src={aboutImage} alt="About the Author" className="about-image" />}  
          {/*<p>tapioca</p>*/}
          <p>{t("about")}</p>
          </div>
        )}
      </div>
     
    </div>

    

    
  );
}

export default Squid;
