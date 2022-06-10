import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi página" />
    </div>
  );
}

export default App;
