import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu col-lg-6'>
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to={"categoria/1"}>COMPUTACIÓN</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"categoria/2"}>ACCESORIOS</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"categoria/3"}>CELULARES</Link>
        </li> 
      </ul>
    </div>
    
  )
}

export default Menu