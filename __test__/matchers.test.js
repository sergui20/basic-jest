describe('Common matchers', () => {
    const user = {name: 'oscar', lastname: 'barajas'}
    const user2 = {name: 'oscar2', lastname: 'barajas'}

    // test('Igualdad de elementos', () => {
    //     expect(user).toEqual(user2);
    // });

    test('Desigualdad de elementos', () => {
        expect(user).not.toEqual(user2);
    });
});
