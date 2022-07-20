import { contexto } from './CartContext'
import React, { useContext } from 'react'
import { useState } from 'react'
import BotonIrCart from './BotonIrCart'
import Swal from 'sweetalert2'

const BotonAgregarCart = ({ product, cantidad }) => {

  const resultado = useContext(contexto)
  const { addItem } = resultado

  const [estado, setEstado] = useState(true)

  const agregarCarrito = () => {

    addItem(product, cantidad)
    setEstado(false)

    Swal.fire({
      title: "Producto agregado",
      text: "Cantidad del producto: " + cantidad,
      icon: "success",
      timer: 2000
    });
  }

  return (
    estado ? <button className="btn btn-success" onClick={() => agregarCarrito()}>Agregar al carrito</button> : <BotonIrCart />
  )
}

export default BotonAgregarCart