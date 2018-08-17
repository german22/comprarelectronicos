function loadProducts(type,name1,name2,name3){
var model1 = getElementByTypeAndName(type,name1);
var model2 = getElementByTypeAndName(type,name2);
var model3 = getElementByTypeAndName(type,name3);
var productManaged = document.createElement("div");
var imageRow = loadRowImages(model1,model2,model3);
productManaged.appendChild(imageRow);
var characteristics = loadCharacteristics(model1,model2,model3,productManaged);
return productManaged;
}


function loadCharacteristics(model1,model2,model3,productManaged){
var characteristics1 = model1.caracteristicas;
var characteristics2 = model2.caracteristicas;
var characteristics3 = model3.caracteristicas;
for (var i = 0;i<characteristics1.length;i++){
var row = {};
if (characteristics1[i].type=="general"){
row = getRowCharacteristicGeneral(characteristics1[i],characteristics2[i],characteristics3[i]);
}
productManaged.appendChild(row);
}
}


function loadRowImages(model1,model2,model3){
var row = document.createElement("div");
row.classList.add("card-group");
var img1 = wrapperOnProduct(buildImageWithUrlAndName(model1.imagenPrincipal,model1.nombre));
var img2 = wrapperOnProduct(buildImageWithUrlAndName(model2.imagenPrincipal,model2.nombre));
var img3 = wrapperOnProduct(buildImageWithUrlAndName(model3.imagenPrincipal,model3.nombre));
row.appendChild(img1);
row.appendChild(img2);
row.appendChild(img3);
return row;
}


function getRowCharacteristicGeneral(characteristic1,characteristic2,characteristic3){
var row = document.createElement("div");
var title = document.createElement("h3");
title.classList.add("row");
title.innerHTML=characteristic1.nombre;
var values = document.createElement("div");
values.classList.add("card-group");
var characteristic1 = wrapperOnProduct(buildCharacteristicGeneral(characteristic1));
var characteristic2 = wrapperOnProduct(buildCharacteristicGeneral(characteristic2));
var characteristic3 = wrapperOnProduct(buildCharacteristicGeneral(characteristic3));
values.appendChild(characteristic1);
values.appendChild(characteristic2);
values.appendChild(characteristic3);
row.appendChild(title);
row.appendChild(values);
return row;
}

function wrapperOnProduct(toWrapped){
var element = document.createElement("div");
element.classList.add("product");
element.appendChild(toWrapped);
return element;
}