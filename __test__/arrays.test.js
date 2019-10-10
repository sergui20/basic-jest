import { arrayFruits, arrayColors } from '../arrays';

describe('Check if an element is included in an array', () => {
    test('Has banana ?', () => {
        expect(arrayFruits()).toContain('banana');
    });

    test('Doesnt have a banana ?', () => {
        expect(arrayFruits()).not.toContain('platano')
    });
});

describe('Check if an array has an specific length', () => {
    test('Has length 4 ?', () => {
        expect(arrayFruits()).toHaveLength(4);
    });
});

describe('Check if a color is included in an array', () => {
    test('Has color red ?', () => {
        expect(arrayColors()).toContain('red');
    })
})