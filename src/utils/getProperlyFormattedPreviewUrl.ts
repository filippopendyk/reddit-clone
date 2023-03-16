export default function getProperlyFormattedPreviewUrl(url:string){
    let urlToFormat = url;
    let formattedUrl = urlToFormat.replaceAll('&amp;', '&');
    console.log(formattedUrl);
    return formattedUrl;
}