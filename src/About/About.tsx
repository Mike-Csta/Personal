import "./About.css";
import karteczki from "../img/1.png";
function About() {
  return (
    <div className="a-container">
      <div className="a-left">
        <div className="a-left-wrap">
          <img src={karteczki} alt="karteczki" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div className="a-right-wrap">
          <h1 className="a-title">Prezydent</h1>
          <div className="a-desc">
            Polski prawnik i polityk, od 6 sierpnia 2015 Prezydent
            Rzeczypospolitej Polskiej.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
