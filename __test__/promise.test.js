import { fetchData } from '../promise';

describe('Testing promises', () => {
    test('Data from an API with then', (done) => {
        const url = 'https://rickandmortyapi.com/api/character';
        fetchData(url).then( data => {
            expect(data.results.length).toBeGreaterThan(0);
            done()
        })
    });

    test('Aynchronous code with resolve', () => {
        return expect(Promise.resolve('Hola !')).resolves.toBe('Hola !');
    });

    test('Aynchronous code with reject', () => {
        return expect(Promise.reject('Error')).rejects.toBe('Error');
    });
});