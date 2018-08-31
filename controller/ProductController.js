function getProduct(type, name) {
  const product = document.createElement("div");
  const model = getElementByTypeAndName(type, name);
  const img = buildImageWithUrlAndName(model.imagenPrincipal, model.nombre);
  const buyButton = buildBuyButton(model.comprar);
  const card = buildCardBody(model);
  product.appendChild(img);
  product.appendChild(buyButton);
  product.appendChild(card);
  return product;

}

function buildBuyButton(url) {
  const a = document.createElement("a");
  const img = document.createElement("button");
  img.classList.add("button");
  img.classList.add("buttonBlue");
  img.innerHTML = "Comprar";
  a.classList.add("alignCenter");
  a.setAttribute("href", url);
  a.appendChild(img);
  return a;
}

function buildImageWithUrlAndName(url, name) {
  const img = document.createElement("figure");
  img.classList.add("card-img-top");
  img.classList.add("alignCenter");
  img.style.backgroundImage = "url('" + url + "')";
  img.setAttribute("alt", "Imagen de " + name);
  return img;
}

function buildCardBody(product) {
  const card = document.createElement("div");
  card.classList.add("card-body");
  card.appendChild(buildCharacteristicsList(product));
  return card;
}

function buildCharacteristicsList(product) {
  const lista = document.createElement("ul");
  lista.classList.add("list");
  lista.classList.add("list-circle");
  product.caracteristicas.forEach(function (characteristic) {
    const characteristicLi = buildCharacteristics(characteristic);
    lista.appendChild(characteristicLi);
  });
  return lista;
}

function buildCharacteristics(characteristic) {
  const characteristicRet = document.createElement("div");
  characteristicRet.classList.add("product");
  const title = document.createElement("h3");
  title.innerHTML = characteristic.nombre + " " + characteristic.unidad;
  const br = document.createElement('br');
  characteristicRet.appendChild(title);
  characteristicRet.appendChild(br);
  characteristic.valores.forEach(function (value) {
    const valor = document.createElement("p");
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


