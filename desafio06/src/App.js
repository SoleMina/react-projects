import { ItemListContainer } from "./components/ItemListContainer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams
} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CartContextProvider } from "./contexts/cartContext";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            index
            element={<ItemListContainer greeting="Bienvenidos a mi página" />}
          />
          <Route
            path="/categories/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/details/:id" index element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          {/*  <Route path="/error" element={<Error404 /> } /> */}
          {/*<Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
