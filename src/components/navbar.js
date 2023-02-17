import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
          <img className="img-fluid logoImg" 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
          alt="Bootstrap" 
          width="90" 
          height="90" 
          />
          </Link>
          <div className="dropdown">
            <button className="btn btn-dark border-warning text-warning dropdown-toggle pr-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites <span className="badge text-bg-secondary">0</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"><button className='btn btn-dark'>X</button> Fav 1</a></li>
            </ul>
          </div>
        </div>
      </nav >
    </div>
  )
}
export default NavBar;