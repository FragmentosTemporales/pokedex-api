import Card from "../components/card";
import React, { useEffect, useState } from "react";

var url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
const Cards = () => {

    const [characters, setCharacters] = useState([]);
    const getCharacters = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCharacters(data.results))
            .catch((error) => console.log(error));
            

    };

    useEffect(() => { getCharacters(); }, []);
   
    const urlVariable = (results) =>{
         
        const url = results.url
    }
    

    return (
        <div className="container">
            <h1 className="pb-3">Pokemon Kanto</h1>
            <div className="row">
                {characters.map((pokemon) => (
                    <Card
                    name={pokemon.name}
                    url={pokemon.url}
                />)
                )}
            </div>

        </div>


    )
}
export default Cards;