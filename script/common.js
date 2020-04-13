export function reloadPage() { window.location.reload(); }
export function createElem(elem) { return document.createElement(elem); }
export function querySelect(elem) { return document.querySelector(elem); }
export function querySelectAll(elem) { return document.querySelectorAll(elem); }
export function removeElem(elem) { return document.querySelector(elem).remove(); }
export function getElemByClass(elem) { return document.getElementsByClassName(elem); }