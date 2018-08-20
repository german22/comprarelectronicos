//Pass this logic to the database, and verify the type!!
function determineType(globalType){
var ret = "iphone";
if (null != globalType)
ret = globalType.toLowerCase();
if ("pulsera"===ret){
ret = "pulsera";
}
return ret;
}