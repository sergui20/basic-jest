import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Test with snapshots', () => {
    test('Rick Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('Will always fail snapshot', () => {
        const user = {
            createdAt: new Date(),
            id: Math.floor(Math.random() * 20)
        }

        expect(user).toMatchSnapshot();
    });

    test('Allow exceptions', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: "Oscar Vargas"
        }

        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        });
    });
});
