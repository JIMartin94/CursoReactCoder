import React, {useState} from "react"
import Swal from 'sweetalert2'


const ItemCount = ({stock , initial,precio, onAdd }) => {

    const [count, setCount] = useState(initial);

    const agregar = () => {
        if(count < stock){
            setCount(count+1);
        }else{
            Swal.fire({
                title: "Error",
                text: "No hay stock suficiente",
                icon: "error",
                timer: 3000
            });
        }
    }

    const sacar = () => {
        if(count > 1){
            setCount(count-1);
        }else{
            Swal.fire({
                title: "Error",
                text: "El numero no puede ser 0",
                icon: "error",
                timer: 3000
            });
        }
    }

    const confirmar = () => {
        if(stock >= count){
            Swal.fire({
                title: "Producto agregado",
                text: "Cantidad del producto: "+count,
                icon: "success",
                timer: 2000
            });
        }
    }

    
    return (
        <>
            <div className="card-body d-flex">
                <button onClick={sacar} className="card-link" style={{ width: '2rem', height: '2rem'}}>-</button>
                <p style={{ margin:"10px"}}>{count}</p>
                <button onClick={agregar} className="card-link" style={{ width: '2rem', height: '2rem'}}>+</button>
                <h5 className="precio">$ {precio}</h5>
            </div> 
            <button onClick={confirmar} type="button" className="btn btn-primary">Agregar al carrito</button>
        </>
    )
}

export default ItemCount