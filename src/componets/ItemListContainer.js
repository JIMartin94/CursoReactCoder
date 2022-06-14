import React,{useState,useEffect} from 'react'
import ItemList from "./ItemList";
import { obtenerProductos } from '../productos';

const ItemListContainer = ({greeting}) =>{
    const [productos,setProductos] = useState([]);

    useEffect(()=>{

        obtenerProductos()
        .then(products =>{
            setProductos(products)   
        }) 
    },[])   


    return(
        <main>
           <h1>{greeting}</h1>
           <div className='contenedor container-fluid'>
                <ItemList items={productos}/>
           </div>
           
        </main>
    );
}

export default ItemListContainer