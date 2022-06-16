import React from 'react'
import ItemCount from './ItemCount'
import "../estilos.css"

const Item = ({id,nombre,imagen,precio,stock}) => {

    const onAdd = () => {};
    
    return (
        <div key={id} className="card col-lg-3 flex-wrap">
            <img className="card-img-top" src={imagen} alt={nombre} style={{ width: '17rem',height: '16rem'}}/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <a href="#detalleProd" className='detalle' id={id} >Ver detalle</a>
            </div>
            <ItemCount stock={stock} initial={1} precio={precio} onAdd={()=>{}}/>
        </div>
    )
}

export default Item