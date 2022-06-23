import React from 'react'
import { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {

  const [estado, setEstado] = useState(true);
  const [cantidad, setcantidad] = useState({});
  
  const onAdd = (cantidad) =>{
    setEstado(false)
    setcantidad(cantidad)
  }

  return (
    <div id="detalleProd" className='container-fluid' >
      <img className="card-img-top" src={product.imagen} alt={product.nombre} style={{ width: '16rem',height: '15rem'}}/>
      <div className="card-body">
          <h5 className="card-title">{product.descripcion}</h5>
      </div>
      <h5 className="precioDestalle">$ {product.precio}</h5>
      {estado? <ItemCount stock={product.stock} initial={1} precio={product.precio} onAdd={onAdd}/> : <Link  to={"/carrito"} type="button" className="btn btn-success">Terminar compra</Link>}
      
    </div>
  )
}

export default ItemDetail