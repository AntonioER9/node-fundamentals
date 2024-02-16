const { getAge, getUUID } = require('./plugins');
// const templateExports = require('./js-foundation/01-template');
// require('./js-foundation/02-desctructuring');
// const {getUserById} = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory');
const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(6)
    .then( (pokemon) => console.log({pokemon}))
    .catch( (err) => console.log('Por favor intente denuevo'))
    .finally( () => console.log('Finalmente'));

// console.log(templateExports);

// const id = 1;

// getUserById( id, function(error, user ){ //function es mi callback
    
//     if(error) {
//         throw new Error(error);
//     }

//     console.log({user});
    
// })
// getUserById( id, ( error, user ) => { //Arrow function
    
//     if(error) throw new Error(error);

//     console.log({user});
    
// })

//* Aplicamos el factory function (05-factory)
// const makePerson = buildMakePerson({ getAge, getUUID })

// const obj = { name: 'John', birthdate: '1994-06-22'};

// const john = makePerson(obj);

// console.log({john});
//* Aplicamos el factory function (05-factory)