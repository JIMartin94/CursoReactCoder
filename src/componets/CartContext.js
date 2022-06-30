import { useState } from "react"
import {  createContext } from "react"

export const contexto = createContext()
const Provider = contexto.Provider

export const MiProvider = ({children}) => {
  const [carrito,setCarrito] = useState([])
  const [cantidadProductos,setCantidadProducto] = useState(0)
  const [precioTotal,setPrecioTotal] = useState(0)

  const addItem = (item, cantidad) =>{
    const copia = [...carrito]
       
    let estado = isInCart(item.id,carrito);

    if(estado){
      for(let p of carrito){
        if(p.id === item.id){
          p.cantidad += cantidad;
        }  
      }
    }else{
      const nuevo_producto = {
        ...item,
        cantidad : cantidad
      }
      copia.push(nuevo_producto)
      setCarrito(copia)  
    } 
    setCantidadProducto(cantidadProductos+cantidad)
    setPrecioTotal(precioTotal+item.precio*cantidad)
  }

  const clear = () =>{
    setCarrito([]);
    setCantidadProducto(0)
    setPrecioTotal(0)
  }

  const isInCart = (id,cart) =>{
    for(let p of cart){   
      if(p.id === id){
        return true
      }
    }
    return false
  }

  const removeItem = (id) => {
    let prod = carrito.find(item => { return item.id === id})
    setCantidadProducto(cantidadProductos-prod.cantidad)
    setPrecioTotal(precioTotal-prod.precio*prod.cantidad)
    setCarrito(carrito.filter(item => (item.id !== id))) 
  }

  const valorDelContexto = {
        carrito : carrito,
        cantidadProductos : cantidadProductos,
        precioTotal : precioTotal,
        addItem : addItem,
        clear : clear,
        removeItem : removeItem,
    }

    console.log(carrito);

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

