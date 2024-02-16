const users = [
    {
        id: 1,
        name: 'Joe Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    },
]

const getUserById = ( id, callback ) => {

    // const user = users.find( ( user ) => {
    //     return user.id === id;
    // });

    const user = users.find( ( user ) => user.id === id ); //versión corta xq tiene un solo return
    
    // if( !user ){
    //     return callback(`User not found with id ${id}`);
    // }

    // return callback(null, user);

    ( user ) //Ternario para reemplazar lo de arriba con los if
        ? callback(null, user) //Si el user no existe
        : callback(`User not found with id ${id}`); //Si el user existe

}

module.exports = {
    getUserById,
}