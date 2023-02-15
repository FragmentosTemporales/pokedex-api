
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'

function FetchLocation() {
  const heart = <FontAwesomeIcon icon={faHeart} />
  const trash = <FontAwesomeIcon icon={faTrash} />

  const locationFetch = (id) => {
    fetch(`https://pokeapi.co/api/v2/location/${id}/`)
      .then(respuesta => respuesta.json())
      .then((data) => {
        createLocation(data);
      });
  }

  const fetchLocations = (number) => {
    for (let i = 1; i <= number; i++)
      locationFetch(i);
  }
  fetchLocations(6);

  const createLocation = (location) => {

    const contenedor = document.createElement('div');
    contenedor.classList.add('col-3');
    document.querySelector('.locationContainer').appendChild(contenedor);


    const card = document.createElement('div');
    card.classList.add('card');
    contenedor.appendChild(card);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const name = document.createElement('h5');
    name.classList.add('card-title');
    name.textContent = location.name;
    cardBody.appendChild(name);

    card.appendChild(cardBody);

    const btns = document.createElement('div');
    btns.classList.add('container')
    card.appendChild(btns)


    let btn = document.createElement("button");
    btn.innerHTML = "Leer más...";
    btn.onclick = function () {
      alert("Button is clicked");
    };
    btn.classList = "btn btn-dark shadow m-3"
    btns.appendChild(btn)

    let btnFav = document.createElement("button");
    btnFav.innerHTML = "<3";
    btnFav.onclick = function () {
      alert("Button is clicked");
    };
    btnFav.classList = "btn btn-light border-warning text-warning shadow m-3"
    btns.appendChild(btnFav)

  }

  return (
    <div className='container'>
      <div className='container pt-4 pb-4'>
        <div className='row'>
          <h1>Locations</h1>
          <div className="locationContainer row row-cols-1 row-cols-md-3 g-4">
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetchLocation;
