import React, { useContext } from 'react'
import { contexto } from '../carrito/CartContext'

const DescripcionProd = () => {

  const context = useContext(contexto)
  const { carrito } = context

  return (carrito.map(product =>
    <div className='col-lg-12 descProdTotal' key={product.id} >
      <p className="card-title">{product.nombre}: ({product.cantidad} x ${product.precio}): ${product.precio * product.cantidad}</p>
    </div>

  )
  )
}
export default DescripcionProd
