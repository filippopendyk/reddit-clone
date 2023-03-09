import capitalizeWords from "../capitalizeWords";
import lowerCaseWords from "../../mocks/lowerCaseWords";

describe('CapitalizeWords', () => {
    it('takes array of strings with the first lower case, and makes it upper case', () => {
        const arrayToTest = lowerCaseWords;
        const expectedResult = ['Pie', 'Dog', 'Cat', 'Banana'];

        const actualResult = capitalizeWords(arrayToTest);
        expect(actualResult).toEqual(expectedResult);
    })
})