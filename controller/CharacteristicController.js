function buildCharacteristicGeneral(characteristic) {
  const characteristicRet = document.createElement("div");
  characteristicRet.classList.add("alignCenter");
  const br = document.createElement('br');
  characteristicRet.appendChild(br);
  if (characteristic==undefined || characteristic==null)
  {
    const valor = document.createElement("p");
    valor.innerHTML = "N/A";
  characteristicRet.appendChild(valor);
  }
  else{
  characteristic.valores.forEach(function (value) {
    const valor = document.createElement("p");
    valor.innerHTML = value.valor + " " + characteristic.unidad;
    characteristicRet.appendChild(valor);

  });
  }
  characteristicRet.appendChild(br);
  return characteristicRet;
}
