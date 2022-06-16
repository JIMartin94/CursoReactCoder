import React, {useState, useEffect} from 'react'
import {obtenerProducto} from '../productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({id}) => {
    const [producto,setProducto] = useState({});

    useEffect(()=>{

        if(id != undefined){
            obtenerProducto(id)
            .then(product =>{
                setProducto(product)   
            }) 
            .catch((error) =>{
                console.log(error)
            });
        }
        

    })


  return (
    <ItemDetail product={producto} />
  )
}

export default ItemDetailContainer