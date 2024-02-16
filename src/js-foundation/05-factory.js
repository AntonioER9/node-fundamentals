// const { v4: uuidv4 } = require('uuid'); 
// const getAge = require('get-age')

// const buildPerson = ({ name, birthdate }) => {
    
//     return {
//         id: uuidv4(), //!Con esto generamos dependencia
//         name,
//         birthdate,
//         age: getAge(birthdate), //!Con esto generamos dependencia
//     }
    
// }

// const obj = { name: 'John', birthdate: '1994-06-22'};

// const john = buildPerson(obj);

// console.log(john);

//* PATRON ADAPTADOR getAgePlugin
// const { getAge, getUUID } = require('../plugins'); //* Archivo de barril.

//* PATRON FACTORY
const buildMakePerson = ({ getUUID, getAge }) => { //* Factory function -> función que devuelve una función.

    return ({ name, birthdate }) => {
    
        return {
            id: getUUID(), //* Patron adaptador
            name,
            birthdate,
            age: getAge(birthdate), //* Patron adaptador
        }
        
    }

}

// const buildPerson = ({ name, birthdate }) => {
    
//     return {
//         id: getUUID(),
//         name,
//         birthdate,
//         age: getAge(birthdate),
//     }
    
// }

// const obj = { name: 'John', birthdate: '1994-06-22'};

// const john = buildPerson(obj);

// console.log(john);

module.exports = {
    buildMakePerson,
}