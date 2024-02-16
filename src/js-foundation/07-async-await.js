
const { http } = require('../plugins')

const getPokemonById = async ( id ) => { //* La palabra async transforma el valor de retorno en una promesa

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);

    // const resp = await fetch(url);
    // const pokemon = await resp.json();

    // throw new Error('Pokemon no existe');

    return pokemon.name;
}