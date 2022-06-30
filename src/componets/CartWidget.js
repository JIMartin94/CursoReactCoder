import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CartContext"


const CartWidget = () => {

  const resultado = useContext(contexto)

  return (
    <div>
      <Link  to={"/carrito"}  >
        <img src="https://icongr.am/material/cart.svg?size=67&color=ede8e8" alt="carrito" />
      </Link>
      <p className="carrito">{resultado.cantidadProductos > 0 ? "Productos " + resultado.cantidadProductos  : "Carrito vacio"}</p>
    </div>
  )
}

export default CartWidget