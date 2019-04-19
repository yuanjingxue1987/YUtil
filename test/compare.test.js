import {compare} from '../src/utils/compare'

describe('Test Util Function \"compare\"', () => {
    it('Should be able to compare booleans ', () => {
        const a = true,
            b = false,
            c = true
        expect(compare(a, b)).toBeFalsy()
        expect(compare(a, c)).toBeTruthy()
    })
    it('Should be able to compare numbers ', () => {
        const a = 4,
            b = 40,
            c = 4
        expect(compare(a, b)).toBeFalsy()
        expect(compare(a, c)).toBeTruthy()
    })
    it('Should be able to compare strings ', () => {
        const a = 'hello world',
            b = 'Hello World',
            c = 'Hello World'
        expect(compare(a, b)).toBeFalsy()
        expect(compare(c, b)).toBeTruthy()
    })
    it('Should be able to compare array', () => {
        const a = [1,2,3,4],
            b = [2,3,4,1],
            c = [1,2,3],
            d = [1,2,4,1,3]
        expect(compare(a, b)).toBeTruthy()
        expect(compare(a, c)).toBeFalsy()
        expect(compare(a, d)).toBeFalsy()
    })
    it('Should be able to compare object', () => {
        const a = {'key1': '111', 'key2': '222', 'key3': '333'},
            b = {'key3': '333', 'key1': '111', 'key2': '222'},
            c = {'key1': '111', 'key2': '222', 'key3': '33'},
            d = {'key1': '111', 'key2': '222', 'key3': '333', 'key4': '444'}
        expect(compare(a, b)).toBeTruthy()
        expect(compare(a, c)).toBeFalsy()
    })
    it('Should be able to compare null and undefined', () => {
        const a = null,
            b = null,
            c = undefined
        expect(compare(a, b)).toBeTruthy()
        expect(compare(a, c)).toBeFalsy()
        expect(compare(c)).toBeTruthy()
    })
    it('Should be able to distinguish string and number ', () => {
        const a = "1234",
            b = 1234
        expect(compare(a, b)).toBeFalsy()
    })
    it('Should be able to distinguish object and array ', () => {
        const a = {"0": 0, "1": 1},
            b = [0,1]
        expect(compare(a, b)).toBeFalsy()
    })
    it('Should be able to handle hierarchical object', () => {
        const a = {
            'key1': '111',
            'key2': ['a', 'b'],
            'key3': {
                'a': 'a1',
                'b': 'b1'
            }
        },
        b = {
            'key1': '111',
            'key2': ['a', 'b'],
            'key3': {
                'a': 'a1',
                'b': 'b1'
            }
        },
        c = {
            'key1': '111',
            'key2': ['a', 'b1'],
            'key3': {
                'a': 'a1',
                'b': 'b1'
            }
        },
        d = {
            'key1': '111',
            'key2': ['a', 'b'],
            'key3': {
                'a': 'a1',
                'b': 'b'
            }
        }
        expect(compare(a, b)).toBeTruthy()
        expect(compare(a, c)).toBeFalsy()
        expect(compare(a, d)).toBeFalsy()
    })
})
