function reloadProducts(type){ //change to ID
    var combo1 = document.getElementById("combo1");
    var combo2 = document.getElementById("combo2");
    var combo3 = document.getElementById("combo3");
    var productManaged = loadProducts(type,combo1.options[combo1.selectedIndex].innerHTML,
    combo2.options[combo2.selectedIndex].innerHTML,combo3.options[combo3.selectedIndex].innerHTML);
    var parent = combo1.parentElement.parentElement.parentElement;
    if (1<parent.childElementCount)
    {
        parent.removeChild(parent.lastChild)
    }
    parent.appendChild(productManaged);
    }