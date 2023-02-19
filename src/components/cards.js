import Card from "../components/card";
import React, { useEffect, useState } from "react";

const Cards = () => {

  const [characters, setCharacters] = useState([]);

  const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        const characterUrls = data.results.map(result => result.url);
  
        const characterPromises = characterUrls.map(url => fetch(url));
        Promise.all(characterPromises)
          .then(characterResponses => Promise.all(
            characterResponses.map(response => response.json())
          ))
          .then(characterData => {
            characterData = characterData.map(data => {
              const types = data.types.map(type => capitalizeType(type.type.name));
              return { ...data, types };
            });
            setCharacters(characterData);
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  };
  
  const formatId = (id) => {

    return id.toString().padStart(3, "0");
  };
  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const capitalizeType = (type) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div 
    style={{ borderRadius: '5px' }}
    className="container border border-dark bg-success mt-3 mb-3 shadow-lg">
      <h1 className="p-3 text-center shadow-lg border bg-info border-primary m-3">Pokemon List</h1>
      <div className="row">
        {characters.map((pokemon) => (
          <div key={pokemon.id} className="col-4">
            <Card
              number={pokemon.id}
              name={capitalizeName(pokemon.name)}
              id={formatId(pokemon.id)}
              img={pokemon.sprites.front_default}
              types={pokemon.types.join(", ")}
            />
          </div>
        ))}
      </div>
    </div>
  );

}
export default Cards;
