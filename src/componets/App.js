import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ItemDetailContainer from "./ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () =>{

    return(
        <>      
        
        <BrowserRouter>
            <NavBar/> 
            <main>
                <Routes>
                    <Route path="/CursoReactCoder" element={<ItemListContainer greeting="Bienvenido a React Computacion!"/> } />
                    <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
                    <Route path="/categoria/:categoryId" element={<ItemListContainer/>} />
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>   
        
        </> 
    ) 
}

export default App;