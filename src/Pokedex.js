import React, {useEffect, useState} from 'react';
import Pokemon from './Pokemon';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('pokemons.json')
            .then(response => response.json())
            .then(content => setPokemons(content))
            .catch(error => setError(error));
    }, []);

    return(
        <ul className="pokedex">
            {
                !error && pokemons.map(poke => 
                    <Pokemon
                        name = {poke.name}
                        number = {poke.number}
                        types = {poke.types}
                        key = {poke.number} //chave eh info unica
                    ></Pokemon>
                )
            }
        </ul>
    )
}

export default Pokedex