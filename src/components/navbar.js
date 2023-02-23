import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {

  const { store, actions } = useContext(Context);
  const trash = <FontAwesomeIcon icon={faTrash} />
 
  


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
            <div className="dropdown-item-text">
              <button className="btn btn-dark border-warning text-warning dropdown-toggle pr-4" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                <span className="badge text-bg-secondary">{store.favorite.length}</span> Favorites <i className="bi bi-star"></i>
              </button>
              <ul className="dropdown-menu p-2">
                {store.favorite.length > 0 ? (
                  store.favorite.map((item, index) => (
                    <ul  className="list-group-item d-flex justify-content-between align-items-center p-1">
                      <li 
                      key={index}  
                      className="dropdown-item-text">{item}</li>
                      <span>
                        <button type="button" className="btn btn-outline-dark" onClick={()=> actions.removeFavorite(item)}>{trash}</button>
                      </span>

                    </ul>
                  ))
                ) : (
                  <li className="dropdown-item" disabled > Empty </li>

                )}
              </ul>
            </div>
          </div>
        </div>
      </nav >
    </div>
  )
}
export default NavBar;