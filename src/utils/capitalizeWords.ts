export default function capitalizeWords(arr: string[]) :string[]{
    return arr.map((word) => {
        const capitalizedFirst = word.charAt(0).toUpperCase();
        const rest = word.slice(1).toLowerCase();
        return capitalizedFirst + rest;
    })
}