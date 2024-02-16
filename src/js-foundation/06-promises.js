// const getPokemonById = ( id, callback ) => { //* Callback y promise

//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`

//     fetch(url)
//         .then((response) => {

//         response.json().then((pokemon) => {
//             callback(pokemon.name);
//         });

//     });
// }

//! para la respuesta en nuestro app js teniamos que tener este código para callbacks:
// getPokemonById(1, ( pokemon ) => {
//     console.log({pokemon});
// })
//! para la respuesta en nuestro app js teniamos que tener este código para callbacks:

const getPokemonById = ( id ) => { //* Promises

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    return fetch(url) // Con el return nos permite que la función devuelva una promesa.
        .then((resp) => resp.json())
        // .then( () => { throw new Error('Pokemon no existe')})
        .then((pokemon) => pokemon.name);
}

//TODO: para la respuesta en nuestro app js teniamos que tener este código para promises:

// getPokemonById(6)
//     .then((pokemon) => console.log({pokemon}))
//     .catch((err) => console.log('Por favor intente denuevo'))
//     .finally( () => console.log('Finalmente'));

//TODO: para la respuesta en nuestro app js teniamos que tener este código para promises:

module.exports = getPokemonById;