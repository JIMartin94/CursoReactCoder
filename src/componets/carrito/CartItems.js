import React, { useContext } from 'react'
import { contexto } from './CartContext'

const CartItems = () => {

  const context = useContext(contexto)
  const { carrito, removeItem } = context

  return (carrito.map(product =>
    <div id="detalleProdCart" className='col-lg-12' key={product.id} >
      <img className="card-img-top" src={product.imagen} alt={product.nombre} style={{ width: '10rem', height: '8rem' }} />
      <div className="card-body">
        <h5 className="card-title">{product.descripcion}</h5>
        <p>Cantidad: {product.cantidad}</p>
        <p>Precio: {product.cantidad} x $ {product.precio} : $ {product.precio * product.cantidad}</p>
      </div>
      <h5 className="precioDestalle">$ {product.precio * product.cantidad}</h5>
      <button className='tachoDeBasura' onClick={() => { removeItem(product.id) }}>
        <img alt='tachoDeBasura' src="https://icongr.am/fontawesome/trash.svg?size=30&color=d01616" />
      </button>
    </div>
  )
  )
}

export default CartItems