import React, {useState, useEffect} from 'react'
import {obtenerProducto} from '../productos';
import ItemDetail from './ItemDetail';
import Loading from './Loading';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState({});
    const [estado,setEstado] = useState(true);
    const {id} = useParams();

    useEffect(()=>{

            obtenerProducto(parseInt(id))
            .then(product =>{
                setProducto(product)   
                setEstado(false)
            }) 
            .catch((error) =>{
                console.log(error)
            });
    })

  return (
    <>
      {estado? <Loading/> : <ItemDetail product={producto} />}
    </>
  )
}

export default ItemDetailContainer