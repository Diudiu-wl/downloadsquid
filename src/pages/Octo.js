
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Octo.css";

function Octo() {
  const navigate = useNavigate();


  return (
    <div className="octo-container">
      <div className="container">
        <h1>恭喜获得小章鱼</h1>
        <p>根据你的电脑来下载对应的小章鱼吧！</p>
        <div>
          <button
            className="windows"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/点击召唤小章鱼.exe`}
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
        返回
      </button>
    </div>
  );
}

export default Octo;
