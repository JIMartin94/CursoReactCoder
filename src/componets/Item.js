import React from 'react'
import "../estilos.css"
import { Link } from 'react-router-dom'

const Item = ({id,nombre,imagen,precio,stock}) => {
    
    return (
        <div key={id} className="card col-lg-3 flex-wrap">
            <img className="card-img-top" src={imagen} alt={nombre} style={{ width: '17rem',height: '16rem'}}/>
            <div className="card-body producto">
                <h5 className="card-title">{nombre}</h5>
                <Link to={`/detalle/${id}`} href="#nav" type="button" className="btn btn-dark" id={id}>Ver detalle</Link>
            </div>
            <h5 className="precio">$ {precio}</h5>
        </div>
    )
}

export default Item