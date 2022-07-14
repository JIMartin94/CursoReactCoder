import ItemListContainer from "./ItemListContainer";
import Cart from "../carrito/Cart";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import CheckOut from "./CheckOut";

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a React Computacion!"/> } />
            <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer/>} />
            <Route path="/carrito" element={<Cart/>} />
            <Route path="/formularioDeCompra" element={<CheckOut />} />
        </Routes>
    </main>
  )
}

export default Main