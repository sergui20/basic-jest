import { fetchData } from '../promise';

describe('Testing with async/await', () => {
    test('Fetch an API', async () => {
        const url = 'https://rickandmortyapi.com/api/character';
        const res = await fetchData(url);

        expect(res.results.length).toBeGreaterThan(0)
    });
    
    test('Fetch an API with errors', async () => {
        const apiError = 'http://httpstat.us/404';
        const request = fetchData(apiError)
        await expect(request).rejects.toEqual(Error('Request failed with status code 404'));
    });

    test('Resolves a hello string', async () => {
        await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
        await expect(Promise.reject('Error')).rejects.toBe('Error');
    });
});