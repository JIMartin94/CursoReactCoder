import Buscador from "./Buscador"
import CartWidget from "./CartWidget"
import Logo from "./Logo"
import Menu from "./Menu"

const NavBar = () => {
  return (
    <>
        <nav id="nav" className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Logo />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <Buscador/>
                    <Menu/>              
                    <CartWidget/>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar