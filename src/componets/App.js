import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ItemDetailContainer from "./ItemDetailContainer";
import { useEffect ,useState } from "react";

const App = () =>{

    const [id,setId] = useState();

    useEffect(()=>{

        //OBTENGO EL ID DE CADA BOTON
        const clickearId = e => {
            if(e.target.classList.contains("detalle")){
                return e.target.id;
            }
        }


        let contenedor = document.querySelector(".contenedor");

        if(contenedor != null){

            contenedor.addEventListener("click", e => {
                let id2 = clickearId(e);
                if(id2 != null){
                    setId(id2);
                }
            });
        }
    },[])

    return(
        <>
            <NavBar/> 
            <ItemListContainer greeting="Bienvenido a React Computacion!"/>
            <ItemDetailContainer id={id} />
            <Footer/>
        </> 
    ) 
}

export default App;