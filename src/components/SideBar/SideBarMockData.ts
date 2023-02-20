import capitalizeWords from "../../utils/capitalizeWords";

const navLinks: string[] = [
    'home','dupa', 'lol', 'ciekawe', 'cos tam', 'blah blah'
];



const capitalizedNavLinks: string[] = capitalizeWords(navLinks);

export default capitalizedNavLinks;