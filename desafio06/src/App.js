import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi página" />
      <hr />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
