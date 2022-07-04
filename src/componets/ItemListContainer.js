import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import Loading from './Loading';
import { collectionProd } from '../firebase';
import { getDocs, query , where } from 'firebase/firestore';

const ItemListContainer = ({greeting}) =>{
    const [productos,setProductos] = useState([]);
    const [estado,setEstado] = useState(true);
    const {categoryId} = useParams();

    useEffect(()=>{

        setEstado(true) 

        if(categoryId){
            const ref = query(collectionProd,where("categoryId","==",parseInt(categoryId)));
            getDocs(ref).then( response =>{
                const productos = response.docs.map( doc =>{
                    return{
                        id: doc.id,
                        ...doc.data(),
                    };
                });
            setProductos(productos);
            setEstado(false)
            })
        }else{

            const ref = collectionProd;
            getDocs(ref).then( response =>{
                const productos = response.docs.map( doc =>{
                    return{
                        id: doc.id,
                        ...doc.data(),
                    };

                });
            setProductos(productos);
            setEstado(false)
            })
        }
    },[categoryId])    

    return(
        <>
           <h1>{greeting}</h1>
           <div className='contenedor container-fluid'>
                {estado? <Loading/> : <ItemList items={productos}/>}
           </div>   
        </>
    );
}

export default ItemListContainer