import { numbers } from '../numbers';

describe('Compare numbers', () => {
    test('Greater than a value', () => {
        expect(numbers(2, 2)).toBeGreaterThan(3);
    });

    test('Greater than or equal to a value', () => {
        expect(numbers(2, 2)).toBeGreaterThanOrEqual(4)
    });

    test('Less than a value', () => {
        expect(numbers(2, 2)).toBeLessThan(10)
    });

    test('Less than or equal to a value', () => {
        expect(numbers(2, 2)).toBeLessThanOrEqual(4)
    });

    test('Float numbers', () => {
        expect(numbers(0.2, 0.1)).toBeCloseTo(0.3, 5) // Because 0.2 + 0.1 in JS its 0.30000000000000004, so we add 5 as second parameters to indicate how many decimals we want to compare
    });
});