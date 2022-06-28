import ItemListContainer from "./ItemListContainer";
import Cart from "./Cart";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path="/CursoReactCoder" element={<ItemListContainer greeting="Bienvenido a React Computacion!"/> } />
            <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer/>} />
            <Route path="/carrito" element={<Cart/>} />
        </Routes>
    </main>
  )
}

export default Main