import React, {useContext} from 'react'
import { contexto } from './CartContext'

const Cart = () => {

  const context = useContext(contexto)

  return (
    <>
      <h1>Carrito!</h1>
      <button onClick={()=> context.clear()}>Limpiar carrito</button>
    </>


  )
}

export default Cart