var globalType = "iphone";
window.onload = function onLoad(){ //Improve THIS!!!
var urlParam = getTypeByUrl();
globalType = determineType(urlParam);
document.getElementById("combo1").onload();
document.getElementById("combo2").onload();
document.getElementById("combo3").onload();
document.getElementById("comboMenu").onload();
reloadProducts(globalType);
}

function getTypeByUrl(){
var url_string = window.location.href;
var url = new URL(url_string);
var urlParam = url.searchParams.get("type");
console.log(globalType);
return urlParam;
}