function getProduct(type,name){
var product = document.createElement("div");
var model = getElementByTypeAndName(type,name);
var img = buildImageWithUrlAndName(model.imagenPrincipal,model.nombre);
var buyButton = buildBuyButton(model.comprar);
var card = buildCardBody(model);
product.appendChild(img);
product.appendChild(buyButton);
product.appendChild(card);
return product;

}

function buildBuyButton(url){
var a = document.createElement("a");
var img = document.createElement("button");
img.classList.add("button");
img.classList.add("buttonBlue");
img.innerHTML = "Comprar";
a.classList.add("alignCenter");
a.setAttribute("href",url);
a.appendChild(img);
return a;
}

function buildImageWithUrlAndName(url,name){
var img = document.createElement("figure");
img.classList.add("card-img-top");
img.classList.add("alignCenter");
img.style.backgroundImage = "url('"+url+"')";
img.setAttribute("alt", "Imagen de "+name);
return img;
}


function buildCardBody(product){
var card = document.createElement("div");
card.classList.add("card-body");
card.appendChild(buildCharacteristicsList(product))
return card;
}


function buildCharacteristicsList(product){
var lista = document.createElement("ul");
lista.classList.add("list");
lista.classList.add("list-circle");
product.caracteristicas.forEach(function(characteristic)
{
var characteristicLi = buildCharacteristics(characteristic);
lista.appendChild(characteristicLi);
});
return lista;
}

function buildCharacteristics(characteristic){
var characteristicRet = document.createElement("div");
characteristicRet.classList.add("product");
var title = document.createElement("h3");
title.innerHTML=characteristic.nombre+" "+characteristic.unidad;
var br = document.createElement('br');
characteristicRet.appendChild(title);
characteristicRet.appendChild(br);
characteristic.valores.forEach(function(value)
{
var valor = document.createElement("p");
valor.innerHTML = value.valor;
characteristicRet.appendChild(valor);

});
characteristicRet.appendChild(br);
return characteristicRet;
}

/**
				<li>Pantalla widescreen de 13.3&nbsp;pulgadas (diagonal) retroiluminada por&nbsp;LED </li>
				<li>Procesador Intel&nbsp;Core&nbsp;i5 dual&nbsp;core de 1.8&nbsp;GHz o Intel&nbsp;Core&nbsp;i7 dual&nbsp;core de&nbsp;2.2&nbsp;GHz<br>Turbo&nbsp;Boost de&nbsp;hasta 3.2&nbsp;GHz</li>
				<li></li>
				<li>Hasta 12 horas de batería<sup>1</sup></li>
				<li>SSD de hasta 512&nbsp;GB<sup>2</sup></li>
				<li>Trackpad Multi-Touch</li>
				<li>1.35 kg<sup>3</sup></li>

			</ul>
    </div>*/


