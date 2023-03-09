import getFilterString from "../getFilterString";

describe('getFilterString', () => {
    it('Returns the filer string for given filter', () => {
        const bestFilter = 'best';
        const expectedBestResult = 'best';
        const actualBestResult = getFilterString(bestFilter);

        expect(actualBestResult).toBe(expectedBestResult);

        const topFilter = 'top';
        const expectedTopResult = 'top';
        const actualTopResult = getFilterString(topFilter);

        expect(actualTopResult).toBe(expectedTopResult);

        const newFilter = 'new';
        const expectedNewResult = 'newest';
        const actualNewResult = getFilterString(newFilter);

        expect(actualNewResult).toBe(expectedNewResult);
    })
})