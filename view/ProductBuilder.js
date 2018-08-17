function createProduct(element,type){ //change to ID
    var product = getProduct(element,type,element.options[element.selectedIndex].innerHTML);
    if (1<element.parentElement.childElementCount)
    {
        element.parentElement.removeChild(element.parentElement.lastChild)
    }
    element.parentElement.appendChild(product);
    }