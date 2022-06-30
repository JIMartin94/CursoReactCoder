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
            onAdd(count);
        }
    }
  
    return (
        <>
            <div className="card-body contador">
                <button onClick={sacar} className="card-link" style={{ width: '2rem', height: '2rem'}}>-</button>
                <p style={{ margin:"10px"}}>{count}</p>
                <button onClick={agregar} className="card-link" style={{ width: '2rem', height: '2rem'}}>+</button>         
            </div> 
            <button onClick={confirmar} type="button" className="btn btn-primary">Confirmar</button>
        </>
    )
}

export default ItemCount