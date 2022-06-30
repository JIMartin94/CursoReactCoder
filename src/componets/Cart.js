import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'
import CartItems from './CartItems'
import Swal from 'sweetalert2'
import TerminarCompra from './TerminarCompra'

const Cart = () => {

  const context = useContext(contexto)
  const {carrito} = context

    if(carrito.length === 0){
      Swal.fire({
        title: "El carrito esta vacio!",
        icon: "error",
        timer: 3000  
      }).then( () =>{
        window.location.href = "./CursoReactCoder";
      });
    } 

  return (
    <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <CartItems/>
          </div>
          <div className='col-lg-4'>
            <TerminarCompra />
          </div>
        </div>
    </div>
  )
}

export default Cart