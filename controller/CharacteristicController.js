function buildCharacteristicGeneral(characteristic){
var characteristicRet = document.createElement("div");
characteristicRet.classList.add("alignCenter");
var br = document.createElement('br');
characteristicRet.appendChild(br);
characteristic.valores.forEach(function(value)
{
var valor = document.createElement("a");
valor.setAttribute("href","https://amzn.to/2Bt2x1U");
valor.innerHTML = value.valor + " "+characteristic.unidad;
characteristicRet.appendChild(valor);

});
characteristicRet.appendChild(br);
return characteristicRet;
}
