import formatUps from "../formatUps";

describe('formatUps', () => {
    it('Gets a number and returns it in desired format as a string', () => {
        const exampleUpsNumber = 12345;
        const expectedResult = '12k';
        const actualResult = formatUps(exampleUpsNumber);
        expect(actualResult).toBe(expectedResult);
    })
})