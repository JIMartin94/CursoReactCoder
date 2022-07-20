import React from 'react'
import { Link } from 'react-router-dom'

const BotonIrCart = () => {
  return (
    <div>
      <button className="nav-link btn btn-primary botonIrCart "><Link to={"/CursoReactCoder"} className="nav-link">Seguir comprando</Link></button>
      <button className="nav-link btn btn-success botonIrCart"><Link to={"/CursoReactCoder/carrito"} className="nav-link">Ir al Carrito</Link></button>
    </div>
  )
}

export default BotonIrCart