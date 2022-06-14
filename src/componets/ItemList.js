import React from 'react'
import Item from './Item'

const itemList = ({items}) => {
    return(items.map(p => 
        <Item 
        id={p.id}
        nombre={p.nombre}
        imagen={p.imagen}
        precio={p.precio}
        stock={p.stock}
        />
        )
    )
}

export default itemList