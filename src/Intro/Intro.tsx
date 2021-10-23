// import { useRef } from "react";

import "./scss/Intro.scss";
import "./scss/scrollbar.scss";
import "./scss/left.scss";
import "./scss/right.scss";
import "./scss/logo.scss";
import Me from "../img/mike.png";

const f1 = () => {
  //Witaj czytelniku! useRef nie działał w innym komponęcie więc zrobiłem tak bo było szybciej
  let z1 = document.querySelector<HTMLElement>(".i-img-1");
  let z2 = document.querySelector<HTMLElement>(".i-img-2");
  z2.style.opacity = "1";
  z1.style.opacity = "1";

  setTimeout(() => {
    z1.style.transform = "translateX(4px)";
  }, 80);

  setTimeout(() => {
    z2.style.transform = "translateX(-17px)";
  }, 110);

  setTimeout(() => {
    z1.style.opacity = "0";
    z2.style.transform = "translateX(-14px)";
    z1.style.transform = "translateX(0px)";
  }, 180);

  setTimeout(() => {
    z2.style.opacity = "0";
  }, 200);
  let time = Math.floor(Math.random() * 8500 + 2000);
  setTimeout(() => {
    f2();
  }, time);
};

const f2 = () => {
  f1();
};

const Intro = () => {
  setTimeout(() => {
    f1();
  }, 3000);

  return (
    <>
     
      <div className="i-top">
        <div className="i-container">
          <div className="i-left">
            <div className="i-left-wrapper">
              <h2 className="i-intro">Helo, My name is</h2>
              <h1 className="i-name">Mikołaj Chlasta</h1>
              <h5>My interests are:</h5>
              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">Web Developer</div>
                  <div className="i-title-item pnk">UI/UX Designer</div>
                  <div className="i-title-item">Photographer</div>
                  <div className="i-title-item pnk">3D Graphics</div>
                  <div className="i-title-item">Contex-creator</div>
                </div>
              </div>
              <p className="i-desc">
                Programming is my passion and I will do everything to develop
                this passion because it's something I love
              </p>
            </div>
          </div>
          <div className="i-right">
            <div className="i-bg">
              <img src={Me} alt="" className="i-img" />
              <img src={Me} alt="" className="i-img-1" />
              <img src={Me} alt="" className="i-img-2" />
            </div>
          </div>
          <div className="i-back-writing-wrapper">
            <div className="i-back-writing">work</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
