import Footer from "./Footer";
import NavBar from "./navBar/NavBar";
import Main from "./main/Main";
import { BrowserRouter } from "react-router-dom";
import { MiProvider } from "./carrito/CartContext";

const App = () =>{

 
    return(        
        <BrowserRouter>

            <MiProvider>
                <NavBar/> 
                <Main/>    
            </MiProvider>
            <Footer/>
            
        </BrowserRouter>             
    ) 
}

export default App;