import getTimeDifference from "../getTimeDifference";

describe('getTimeDifference', () => {
    it('Gets the timestamp and returns the relative time as formatted string', () => {
        const actualDateInSeconds = 140;
        const postUploadTimeInSeconds = 120;

        const expectedResult = '20 seconds ago';
        const actualResult = getTimeDifference(postUploadTimeInSeconds, actualDateInSeconds);

        expect(actualResult).toBe(expectedResult);
    })
})