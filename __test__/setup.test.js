// After 
afterEach( () => console.log('After each tests'));
afterAll( () => console.log('After all tests'));

// Before
beforeEach( () => console.log('Before each tests'));
beforeAll( () => console.log('Before all tests'));

describe('Prepare before exect', () => {
    test('Is true ?', () => {
        expect(true).toBeTruthy();
    });
});