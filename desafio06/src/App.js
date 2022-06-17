import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          index
          element={
            <>
              <ItemListContainer greeting="Bienvenidos a mi página" />
              <ItemDetailContainer />
            </>
          }
        />
        <Route path="/detail" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/*  <Route path="/error" element={<Error404 /> } /> */}
      </Routes>
    </Router>
  );
}

export default App;
