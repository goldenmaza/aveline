import { prepareKeys, prepareWhere } from '../../../../schema/definitions/loader/helpers';

afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 10000));
});

describe("verifying dataloader's helper functions", () => {
    const dataCollection = [];
    const dataKeys = [];
    const fk = 'example'; // Note: fake foreign key value...
    const emptyArgsExample = {
        id: 0,
        args: {}
    };
    const singleArgsExample = {
        id: 1,
        args: {
            hidden: false
        }
    };
    const multipleArgsExample = {
        id: 2,
        args: {
            hidden: false,
            box: true,
            main: true
        }
    };
    dataCollection.push(emptyArgsExample);
    dataKeys.push(emptyArgsExample.id);
    dataCollection.push(singleArgsExample);
    dataKeys.push(singleArgsExample.id);
    dataCollection.push(multipleArgsExample);
    dataKeys.push(multipleArgsExample.id);

    jest.setTimeout(25000);

    it('verifies prepareKeys function', (done) => {
        const keys = prepareKeys(dataCollection);
        expect(keys).toStrictEqual(dataKeys);

        done();
    });

    it('verifies prepareWhere function with an empty args object', (done) => {
        const keys = prepareKeys(dataCollection);
        expect(keys).toStrictEqual(dataKeys);

        const args = emptyArgsExample.args;
        let dataWhere = {};
        dataWhere[fk] = keys;
        for (let key in args) {
            if (args.hasOwnProperty(key)) {
                dataWhere[key] = args[key];
            }
        }
        const where = prepareWhere(fk, keys, args);
        expect(where).toStrictEqual(dataWhere);

        done();
    });

    it('verifies prepareWhere function with single args object', (done) => {
        const keys = prepareKeys(dataCollection);
        expect(keys).toStrictEqual(dataKeys);

        const args = singleArgsExample.args;
        let dataWhere = {};
        dataWhere[fk] = keys;
        for (let key in args) {
            if (args.hasOwnProperty(key)) {
                dataWhere[key] = args[key];
            }
        }
        const where = prepareWhere(fk, keys, args);
        expect(where).toStrictEqual(dataWhere);

        done();
    });

    it('verifies prepareWhere function with multiple args objects', (done) => {
        const keys = prepareKeys(dataCollection);
        expect(keys).toStrictEqual(dataKeys);

        const args = multipleArgsExample.args;
        let dataWhere = {};
        dataWhere[fk] = keys;
        for (let key in args) {
            if (args.hasOwnProperty(key)) {
                dataWhere[key] = args[key];
            }
        }
        const where = prepareWhere(fk, keys, args);
        expect(where).toStrictEqual(dataWhere);

        done();
    });
});
