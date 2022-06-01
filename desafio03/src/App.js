import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Cuerpo } from "./components/Cuerpo";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi página" />
      <Cuerpo />
    </div>
  );
}

export default App;
