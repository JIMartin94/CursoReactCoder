import CartWidget from "./CartWidget"
import Logo from "./Logo"
import Menu from "./Menu"

const NavBar = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row">       
                <nav id="nav" className="navbar navbar-expand-sm navbar-dark bg-dark">             
                    <Logo />
                    <Menu/>              
                    <CartWidget/>
                </nav>
            </div>                
        </div>
    </>
  )
}

export default NavBar