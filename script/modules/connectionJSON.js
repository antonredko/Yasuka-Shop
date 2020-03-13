export function connect(url, filts, prods) {
    const REQ = new XMLHttpRequest();
    
    REQ.open("GET", url);
    REQ.responseType = 'json';
    REQ.send();
    REQ.onload = function() {
        let products = REQ.response;
        filts(products);
        prods(products);
    }
}