describe('Check text strings', () => {
    const text = 'Un texto de prueba';
    test('Should contain de following text', () => {
        expect(text).toMatch(/texto/)
    });

    test('Should not contain the following text', () => {
        expect(text).not.toMatch(/es/);
    });

    test('Check length of a text', () => {
        expect(text).toHaveLength(18);
    })
});