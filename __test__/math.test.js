import {sumar, restar, multiplicar, dividir} from '../math';

// Describit la intension general de la prueba
describe('Calculos matemáticos', () => {
    test('Sumar', () => {
        expect(sumar(1, 1)).toBe(2);
    });

    test('Restar', () => {
        expect(restar(2, 1)).toBe(1);
    });

    test('Multiplicar', () => {
        expect(multiplicar(2, 2)).toBe(4)
    });

    test('Dividir', () => {
        expect(dividir(4, 2)).toBe(2)
    });
});