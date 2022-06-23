import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import { obtenerProductos, obtenerProductoByCategory} from '../productos';
import Loading from './Loading';

const ItemListContainer = ({greeting}) =>{
    const [productos,setProductos] = useState([]);
    const [estado,setEstado] = useState(true);
    const {categoryId} = useParams();

    useEffect(()=>{

        setEstado(true) 

        if(categoryId){
            obtenerProductoByCategory(parseInt(categoryId))
            .then(products =>{
                setProductos(products) 
                setEstado(false)  
            }) 
            .catch((error) =>{
                console.log(error)
            })
        }else{
            obtenerProductos()
            .then(products =>{
                setProductos(products)
                setEstado(false)   
            }) 
            .catch((error) =>{
                console.log(error)
            });
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