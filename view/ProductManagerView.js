function reloadProducts(type) { //change to ID
  var combo1 = document.getElementById("combo1");
  var combo2 = document.getElementById("combo2");
  var combo3 = document.getElementById("combo3");
  var productManaged = loadProducts(type, combo1.options[combo1.selectedIndex].innerHTML,
      combo2.options[combo2.selectedIndex].innerHTML, combo3.options[combo3.selectedIndex].innerHTML);
    updateDevices(productManaged);
}

function updateDevices(productManaged){
  var parent = combo1.parentElement.parentElement.parentElement;
  removeChildrenOfComboParent(parent);
  parent.appendChild(productManaged);
}

function removeChildrenOfComboParent(parent){
  while (1 < parent.childElementCount){
    parent.removeChild(parent.lastChild)
  }
}

function reloadPageUrl(element){
    const type = element.options[element.selectedIndex].value;
    if (type=="iphone"){
    window.document.location.href = "./index.html";
    }else
    {
    window.document.location.href = "./"+type+".html?type="+type;
    }
}
