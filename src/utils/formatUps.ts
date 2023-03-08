import numeral from "numeral";

export default function formatUps(ups: number): string{
    let upsTransformed = numeral(ups).format('0,0a');
    let upsTransformedAsString = upsTransformed.toString();
    return upsTransformedAsString;
}