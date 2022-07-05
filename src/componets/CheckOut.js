import { addDoc, serverTimestamp } from 'firebase/firestore'
import { useContext } from 'react'
import { collectionOrdenes } from '../firebase' 
import { contexto } from './CartContext'
import Swal from 'sweetalert2'

const CheckOut = () => {

    const context = useContext(contexto)
    const {carrito,precioTotal, clear} = context

    if(carrito.length === 0){
        Swal.fire({
          title: "El carrito esta vacio!",
          icon: "error",
          timer: 3000  
        }).then( () =>{
          window.location.href = "./CursoReactCoder";
        });
    } 

    const handleSubmit= (e) =>{
        e.preventDefault()
        const nombre = e.target.elements.nombre.value
        const email = e.target.elements.email.value
        const telefono = e.target.elements.telefono.value

        if(nombre === "" || email === "" || telefono === ""){
            Swal.fire({
                title: "Debe llenar todos los datos!",
                icon: "error", 
            })
        }else{
            const usuario = { nombre, email, telefono }
            handleBuy(usuario)
        }
    }

    const prod = carrito.map(p =>{
        return{
            id: p.id,
            nombre: p.descripcion,
            cantidad: p.cantidad,
            precio: p.precio
        }
    })

    const handleBuy = (usuario) =>{
        
        const orderData = {
            comprador: [{usuario}],
            items: [{prod}],
            fecha: serverTimestamp(),
            precioTotal: precioTotal
        }

        const consulta = addDoc(collectionOrdenes, orderData)

        consulta.then(resultado =>{
            Swal.fire({
                title: "La compra fue realizada con exito",
                text: "el codigo de seguimiento es: "+ resultado.id,
                icon: "success",
            }).then( () =>{
                window.location.href = "./CursoReactCoder";
                clear();
              })
        }).catch(error =>{
            console.log(error)
        })

    }

    return (
        <form className='formCompra col-lg-12' onSubmit={handleSubmit}>
            <h5>FORMULARIO DE COMPRA</h5>
            <div className="form-group col-lg-5">
                <label>Apellido y Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Apellido y Nombre"/>
            </div>
            <div className="form-group col-lg-5">
                <label>Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email"/>
            </div>
            <div className="form-group col-lg-5">
                <label>Telefono</label>
                <input type="text" className="form-control" id="telefono" placeholder="Telefono"/>
            </div>
            <button type="submit" className="btn btn-primary  col-lg-5">Terminar Compra</button>
        </form>
  )
}

export default CheckOut