
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'

function PokeFetch() {

  const fav = [];
  const favLength = fav.length;
  const heart = <FontAwesomeIcon icon={faHeart} />
  const trash = <FontAwesomeIcon icon={faTrash} />

  const fetchPokemon = (id) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(respuesta => respuesta.json())
      .then((data) => {
        createPokemon(data);
      });
  }

  const fetchPokemons = (number) => {
    for (let i = 1; i <= number; i++)
      fetchPokemon(i);
  }
  fetchPokemons(6);

  const createPokemon = (pokemon) => {

    const contenedor = document.createElement('div');
    contenedor.classList.add('col-3');
    document.querySelector('.pokemonContainer').appendChild(contenedor);


    const card = document.createElement('div');
    card.classList.add('card');
    contenedor.appendChild(card);

    const sprite = document.createElement('img');
    sprite.classList.add('card-img-top')
    sprite.src = pokemon.sprites.front_default;
    card.appendChild(sprite);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const name = document.createElement('h5');
    name.classList.add('card-title');
    name.textContent = "Name:  " + pokemon.name
    cardBody.appendChild(name);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
    cardBody.appendChild(number);

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
      name.textContent ="Name:  " + location.name;
      cardBody.appendChild(name);
      
      const region = document.createElement('p');
      region.classList.add('region');
      region.textContent = "Region:  " + location.region.name;
      cardBody.appendChild(region);

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
  }

  return (
    <div className='container'>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <img className="img-fluid logoImg" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' />
          <div className="dropdown">
            <button className="btn btn-dark border-light dropdown-toggle pr-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites <span className="badge text-bg-secondary">{favLength}</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"><button className='btn btn-dark'>X</button> Fav 1</a></li>
            </ul>
          </div>
        </div>
      </nav >
      <div className='container-fluid pt-4'>
        <div className='row m-2 '>
          <h1 className='m-4 p-4'>Pokemon List:</h1>
          <div className="pokemonContainer row row-cols-md-4 g-6">
          </div>
        </div>
        <div className='row m-2'>
          <h1 className='m-4 p-4'>Locations List:</h1>
          <div className="locationContainer row row-cols-md-4 g-6">
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeFetch;
