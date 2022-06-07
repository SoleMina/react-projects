import { NavBar } from "./components/NavBar";
import { Cuerpo } from "./components/Cuerpo";
import { ItemListContainer } from "./components/ItemListContainer";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi página" />
    </div>
  );
}

export default App;
