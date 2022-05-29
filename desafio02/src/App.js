import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Cuerpo } from "./components/Cuerpo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cuerpo />
    </div>
  );
}

export default App;
