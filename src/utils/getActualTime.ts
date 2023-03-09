export default function getActualTimeInSeconds(): number{
    const date = new Date();
    const currentTimestamp = date.getTime();
    const actualTimeInSeconds = Math.floor(currentTimestamp / 1000);
    return actualTimeInSeconds;
}