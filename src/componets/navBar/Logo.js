import {Link} from 'react-router-dom'


const Logo = () => {
  return (
    <div className='logo col-lg-3'>
      <Link className="navbar-brand" to="/" id="logo">
        <img src="https://icongr.am/devicon/react-original.svg?size=128&color=currentColor"  alt="Logo Pagina" />
        <p>React computación</p>
    </Link>
    </div>
    
  )
}

export default Logo