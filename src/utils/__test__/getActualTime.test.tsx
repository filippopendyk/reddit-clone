import getActualTimeInSeconds from "../getActualTime";

describe('getActualTime', () => {
    it('Returns seconds as number', () => {
        const expectedTypeOfReturnedValue = 'number';
        const actualTypeOfReturnedValue = typeof(getActualTimeInSeconds());

        expect(actualTypeOfReturnedValue).toBe(expectedTypeOfReturnedValue);
    })
})