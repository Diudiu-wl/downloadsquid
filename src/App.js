// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <h1>欢迎来到小鱿鱼领养处</h1>
        <p>根据你的电脑来下载对应的小鱿鱼吧！</p>
        <div>
          <button
            className="windows"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/squidy.exe`}
          >
            Windows
          </button>
          <button
            className="macos"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/keroppiii.dmg.zip`}
          >
            MacOS
          </button>
        </div>
      </div>

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
    </div>

    
  );
}

export default App;
