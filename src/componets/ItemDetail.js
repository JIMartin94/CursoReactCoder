import React , { useContext } from 'react'
import { contexto } from './CartContext'
import { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {

  const resultado = useContext(contexto)
  const {addItem} = resultado

  const [estado, setEstado] = useState(true);
  const [cantidad, setcantidad] = useState({});
  
  const onAdd = (cant) =>{
    setEstado(false)
    setcantidad(cant)
  }

  return (
    <div id="detalleProd" className='container-fluid' >
      <img className="card-img-top" src={product.imagen} alt={product.nombre} style={{ width: '16rem',height: '15rem'}}/>
      <div className="card-body">
          <h5 className="card-title">{product.descripcion}</h5>
      </div>
      <h5 className="precioDestalle">$ {product.precio}</h5>
      {estado ? <ItemCount stock={product.stock} initial={1} precio={product.precio} onAdd={onAdd}/> : <button className="btn btn-success" onClick={()=> addItem(product,cantidad)}><Link to={"/carrito"} className="nav-link">Terminar compra</Link></button>}
      
    </div>
  )
}

export default ItemDetail