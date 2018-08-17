function mouseOverProduct(x) {
	//TODO - Could be better
    x.classList.add("onmouseoverProductItem");
}

function mouseOut(x) {
	x.classList.remove("onmouseoverProductItem");
	
}

function mouseClickProduct(x) {
	classSelected = "onmouseclickProductItem";
	if (x.classList.contains(classSelected)){
    x.classList.remove(classSelected);
}else{
	x.classList.add(classSelected);
	}
}
