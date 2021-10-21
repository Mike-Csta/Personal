import "./App.css";
import Intro from "./Intro/Intro";
import About from "./About/About";
import LoadingScreen from "./LoadingScreen/LoadingScreen";

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <Intro />
      <About />
    </div>
  );
}

export default App;
