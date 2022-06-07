import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";
import NavBar from "./NavBar";

const App = () =>{
    return(
        <>
            <NavBar/> 
            <ItemListContainer greeting="Bienvenido a React Computacion!"/>
            <Footer/>
        </>
    ) 
}

export default App;