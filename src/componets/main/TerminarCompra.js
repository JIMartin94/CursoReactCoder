import React from 'react'
import DescripcionProd from './DescripcionProd'
import { useContext } from 'react'
import { contexto } from '../carrito/CartContext'
import { Link } from 'react-router-dom'

const TerminarCompra = () => {

    const context = useContext(contexto)
    const {precioTotal,clear} = context

  return (
    <div className="terminarCompra">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Total de la compra</h5>
                <p className="card-text"></p>
                <DescripcionProd />
                <h5>Precio Final: ${precioTotal}</h5>
                <div className='FinalizarCompra'>
                    <Link to='/' className="btn btn-primary btnFinalizarCompra">Volver al menu</Link>
                    <Link to='/formularioDeCompra' className="btn btn-success btnFinalizarCompra">Finalizar compra</Link>
                </div>
            </div>
        </div>
        <button className="btn btn-danger limpiarCompra" onClick={()=>{clear()}}>Limpiar carrito</button>
    </div>   
  )
}

export default TerminarCompra