import { getUserById } from "../../src/js-foundation/03-callbacks"

describe('03-callbacks.ts', () => { 
    
    test('getUserById should return an error if user does not exist ', (done) => { //el done hay que llamarlo cuando ya se tengan los resultados

        const id = 10;

        getUserById(id, (err, user) => {
        
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            
            done(); //ya sabemos que tenemos los resultados en este punto
        });
        
    });

    test('getUserById should return John Doe ', (done) => { //el done hay que llamarlo cuando ya se tengan los resultados

        const id = 1;

        getUserById(id, (err, user) => {
        
            expect(err).toBeUndefined();
            expect(user).toEqual({
                id: 1,
                name: 'John Doe'
            });
            
            done(); //ya sabemos que tenemos los resultados en este punto
        });
        
    });

});