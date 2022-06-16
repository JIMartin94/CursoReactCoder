import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div id="detalleProd" className='container-fluid' >
      <img className="card-img-top" src={product.imagen} alt={product.nombre} style={{ width: '16rem',height: '15rem'}}/>
      <div className="card-body">
          <h5 className="card-title">{product.descripcion}</h5>
      </div>
      <ItemCount stock={product.stock} initial={1} precio={product.precio} onAdd={()=>{}}/>
    </div>
  )
}

export default ItemDetail