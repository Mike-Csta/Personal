import "./Intro.css";
import Me from "../img/andrzej.png";
const Intro = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="left-wrapper">
          <h2 className="intro">Helo, My name is</h2>
          <h1 className="name">Andrzej Duda</h1>
          <div className="title">
            <div className="title-wrapper">
              <div className="title-item">Web Developer</div>
              <div className="title-item">UI/UX Designer</div>
              <div className="title-item">Photographer</div>
              <div className="title-item">Writer</div>
              <div className="title-item">Contex-creator</div>
              <div className="title-item">Web Developer</div>
            </div>
          </div>
          <p className="desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className="right">
        <div className="bg"></div>
        <img src={Me} alt="" className="img" />
      </div>
    </div>
  );
};

export default Intro;
