import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import Loading from '../Loading';
import {useParams} from 'react-router-dom';
import { collectionProd } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState({});
    const [estado,setEstado] = useState(true);
    const {id} = useParams();

    useEffect(()=>{
      const ref = doc(collectionProd, id);

      getDoc(ref).then( response =>{
        const product = () =>{
            return{
                id: response.id,
                ...response.data(),
            };
        };
      setProducto(product);
      setEstado(false)
      })
    },[id])

  return (
    <>
      {estado? <Loading/> : <ItemDetail product={producto} />}
    </>
  )
}

export default ItemDetailContainer