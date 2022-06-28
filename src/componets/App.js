import Footer from "./Footer";
import NavBar from "./NavBar";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import { MiProvider } from "./CartContext";

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