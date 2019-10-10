import { isTrue, isFalse, isNull, isUndefined } from '../true';

describe('Test null values', () => {
    test('null', () => {
        expect(isNull()).toBeNull();
    })
});

describe('Test true values', () => {
    test('true', () => {
        expect(isTrue()).toBeTruthy();
    })
});

describe('Test false values', () => {
    test('false', () => {
        expect(isFalse()).toBeFalsy();
    })
});

describe('Test undefined values', () => {
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined();
    })
});
