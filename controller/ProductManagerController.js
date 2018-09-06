function loadProducts(type, name1, name2, name3) {
  var model1 = getElementByTypeAndName(type, name1);
  var model2 = getElementByTypeAndName(type, name2);
  var model3 = getElementByTypeAndName(type, name3);
  var productManaged = document.createElement("div");
  var imageRow = loadRowImages(model1, model2, model3);
  var buttonRow = loadRowBuyButton(model1, model2, model3);
  productManaged.appendChild(imageRow);
  productManaged.appendChild(buttonRow);
  loadCharacteristics(model1, model2, model3, productManaged);
  return productManaged;
}

function loadCharacteristics(model1, model2, model3, productManaged) {
  var characteristics1 = model1.caracteristicas;
  var characteristics2 = model2.caracteristicas;
  var characteristics3 = model3.caracteristicas;
  const maxLength = Math.max(characteristics1.length,characteristics2.length,characteristics3.length)
  if (maxLength == characteristics1.length)
    {
    characteristicGuide = characteristics1;
    }else{
    if (maxLength == characteristics2.length)
        {
        characteristicGuide = characteristics2;
        }else
        {
            characteristicGuide = characteristics3;

        }
    }
  for (var i = 0; i < maxLength; i++) {
    let row = {};
    if (characteristicGuide[i].type == "general") {
       const characteristicName = characteristicGuide[i].nombre;
       const index1 = verifyCharacteristic(i,characteristicName,characteristics1)
       const index2 = verifyCharacteristic(i,characteristicName,characteristics2)
       const index3 = verifyCharacteristic(i,characteristicName,characteristics3)
      row = getRowCharacteristicGeneral(characteristicName,characteristics1[index1], characteristics2[index2], characteristics3[index3]);

    }
    productManaged.appendChild(row);
  }
}


function verifyCharacteristic(i,characteristicName,characteristic){
        var index = i;
       if (characteristic[i] == null || typeof characteristic[i].nombre=='undefined' || characteristicName!=characteristic[i].nombre)
            {
                  index = characteristic.findIndex(findIndexByName,characteristicName);
            }
            return index
            }

function findIndexByName(element,index,array){
    return  (element.nombre==this)

}

function loadRowImages(model1, model2, model3) {
  var row = document.createElement("div");
  row.classList.add("card-group");
  var img1 = wrapperOnProduct(buildImageWithUrlAndName(model1.imagenPrincipal, model1.nombre));
  var img2 = wrapperOnProduct(buildImageWithUrlAndName(model2.imagenPrincipal, model2.nombre));
  var img3 = wrapperOnProduct(buildImageWithUrlAndName(model3.imagenPrincipal, model3.nombre), true);
  row.appendChild(img1);
  row.appendChild(img2);
  row.appendChild(img3);
  return row;
}

function loadRowBuyButton(model1, model2, model3) {
  var row = document.createElement("div");
  row.classList.add("card-group");
  var button1 = wrapperOnProduct(buildBuyButton(model1.comprar));
  var button2 = wrapperOnProduct(buildBuyButton(model2.comprar));
  var button3 = wrapperOnProduct(buildBuyButton(model3.comprar), true);
  row.appendChild(button1);
  row.appendChild(button2);
  row.appendChild(button3);
  return row;
}

function getRowCharacteristicGeneral(name,characteristic1, characteristic2, characteristic3) {
  const row = document.createElement("div");
  const title = document.createElement("h3");
  title.classList.add("row");
  title.classList.add("characteristicTitle");
  title.innerHTML = name;
  const values = document.createElement("div");
  values.classList.add("card-group");
  const characteristic1Loaded = wrapperOnProduct(buildCharacteristicGeneral(characteristic1));
  const characteristic2Loaded = wrapperOnProduct(buildCharacteristicGeneral(characteristic2));
  const characteristic3Loaded = wrapperOnProduct(buildCharacteristicGeneral(characteristic3), true);
  values.appendChild(characteristic1Loaded);
  values.appendChild(characteristic2Loaded);
  values.appendChild(characteristic3Loaded);
  row.appendChild(title);
  row.appendChild(values);
  return row;
}

function wrapperOnProduct(toWrapped, third = false) {
  const element = document.createElement("div");
  element.classList.add("product");
  if (third) {
    element.classList.add("product-last");
  }
  element.appendChild(toWrapped);
  return element;
}