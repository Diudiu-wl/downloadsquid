
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Squid.css';

function Squid() {
  const [showAbout, setShowAbout] = useState(false);
  const [aboutImage, setAboutImage] = useState(null);  
  const [showModal, setShowModal] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); 

  const validCode = "6688"; 

  const handleDownloadClick = () => {
    setShowModal(true); 
  };

  const handleConfirmCode = () => {
    if (codeInput === validCode) {
      navigate("/octo");
    } else {
      setErrorMessage("领取码错误，请重新输入");
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
      <div className="container">
        <p>*注意：11.22之后更新了（把章鱿互动增加到2种了）！11.22前下载的请重新下载小鱿鱼和小章鱼！</p>
        <h1>欢迎来到小鱿鱼领养处</h1>
        <p>根据你的电脑来下载对应的小鱿鱼吧！</p>
        <div>
          <button
            className="windows"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/点击召唤小鱿鱼.exe`}
          >
            Windows
          </button>
          <button
            className="macos"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/xiaoyou.dmg.zip`}
          >
            MacOS
          </button>
        </div>

        <p>右键小鱿鱼查看说明书来获得小章鱼的领取码吧！</p>
        <div>
        <button className="octo-download-button" onClick={handleDownloadClick}>
          领取小章鱼
        </button>
        </div>
        
      </div>

      

      {/* 输入领取码 */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>请输入领取码</h2>
            <input
              type="text"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              onKeyDown={handleKeyDown} // 新增的回车监听
              placeholder="领取码"
            />
            <button className="confirm-button" onClick={handleConfirmCode}>
              确认
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button className="cancel-button" onClick={closeModal}>
              取消
            </button>
          </div>
        </div>
      )}

      {/* 新增的 MacOS 安装教程 */}
      <div className="tutorial">
        
        <h2>如果碰到任何问题欢迎联系作者！</h2> 
        <h2>Windows上运行时如果弹出小蓝窗就点击：更多信息-&gt;仍要运行 就行</h2> 
        <p>*电脑会觉得这是可疑软件只是因为发布者未知而已</p>
        <h2>下面是MacOS版安装小指导（Windows不用看哦）：</h2>
        <div className="step">
          <span>1. 把软件图标拖到 <strong>Applications</strong> 中</span>
          <img src={`${process.env.PUBLIC_URL}/images/1.jpg`} alt="Step 1" />
        </div>
        <div className="step">
          <span>2. 弹出此窗口后点击右上方问号</span>
          <img src={`${process.env.PUBLIC_URL}/images/2.jpeg`} alt="Step 2" />
        </div>
        <div className="step">
          <span>3. 点击“为我打开通用面板”</span>
          <img src={`${process.env.PUBLIC_URL}/images/3.jpeg`} alt="Step 3" />
        </div>
        <div className="step">
          <span>4. 选择“仍要打开”</span>
          <img src={`${process.env.PUBLIC_URL}/images/4.jpeg`} alt="Step 4" />
        </div>
        <div className="step">
          <span>5. 完成以上步骤后软件会在启动台出现</span>
          <img src={`${process.env.PUBLIC_URL}/images/5.jpeg`} alt="Step 5" />
        </div>
        <div className="step">
          <span>6. 这样就拥有啦</span>
          <img src={`${process.env.PUBLIC_URL}/images/6.jpg`} alt="Step 6" />
        </div>
      </div>

      {/* 新增的 小鱿鱼额外的设置教程 */}
      <div className="tutorial">
        
        <h2>下面是运行小鱿鱼软件后需要进行的一些隐私设置（也是MacOS上的，不设置的话只能识别壁纸）：</h2>
        <div className="step">
          <span>1. 打开软件后会马上出现这样的提示</span>
          <img src={`${process.env.PUBLIC_URL}/images/kk0.png`} alt="Step 1" />
        </div>
        <div className="step">
          <span>2. 点击左下角</span>
          <img src={`${process.env.PUBLIC_URL}/images/kk1.png`} alt="Step 2" />
        </div>
        <div className="step">
          <span>3. 输入密码（开机密码）</span>
          <img src={`${process.env.PUBLIC_URL}/images/kk2.png`} alt="Step 3" />
        </div>
        <div className="step">
          <span>4. 点击"+"号添加此软件，并打勾</span>
          <img src={`${process.env.PUBLIC_URL}/images/kk3.png`} alt="Step 4" />
        </div>
        <div className="step">
          <span>5. 选择“以后”之后关闭小鱿鱼再重新打开小鱿鱼就行</span>
          <img src={`${process.env.PUBLIC_URL}/images/kk4.png`} alt="Step 5" />
        </div>
        
      </div>

      <div className="about-author-container">
      <button onClick={handleAboutClick} className="about-button">
          关于作者
        </button>
        {showAbout && (
          <div className="about-info">
          <p>tapioca :</p>
          {aboutImage && <img src={aboutImage} alt="About the Author" className="about-image" />}  
          {/*<p>tapioca</p>*/}
          <p>日常破防的中刷使。</p>
          </div>
        )}
      </div>
     
    </div>

    

    
  );
}

export default Squid;
