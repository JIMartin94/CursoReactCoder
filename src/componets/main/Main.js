import ItemListContainer from "./ItemListContainer";
import Cart from "../carrito/Cart";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import CheckOut from "./CheckOut";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/CursoReactCoder" element={<ItemListContainer greeting="Bienvenido a React Computacion!" />} />
        <Route path="/CursoReactCoder/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/CursoReactCoder/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/CursoReactCoder/carrito" element={<Cart />} />
        <Route path="/CursoReactCoder/formularioDeCompra" element={<CheckOut />} />
      </Routes>
    </main>
  )
}

export default Main