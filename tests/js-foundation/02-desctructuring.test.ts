import { characters } from "../../src/js-foundation/02-desctructuring";

describe('02-desctructuring.ts', () => { 

    test('characters should contain Flash and Superman', () => { 

        expect(characters).toContain('Flash'); //toContain is case sensitive
        expect(characters).toContain('Superman');

    });

    test('first character should be Flash and second Superman', () => { 

        const [flash, superman] = characters;

        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');

    });

});