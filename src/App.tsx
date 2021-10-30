import "./App.scss";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Faq from "./Faq/Faq";
import MediaBar from "./MediaBar/MediaBar";
import LoadingScreen from "./LoadingScreen/LoadingScreen";

function App() {
  return (
    <div className="App">
      <div className="build">
        STRONA W BUDOWIE.
        <hr /> AKTUALNIE NIE OBSŁUGUJE URZĄDZEŃ MOBILNYCH
      </div>
      <LoadingScreen />
      <Intro />
      <MediaBar />
      <About />
      <Faq />
    </div>
  );
}

export default App;
