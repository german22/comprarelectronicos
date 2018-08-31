function insertModelsByTypeInto(element, type) {
  element.innerHTML = "";
  element.innerHTML = getComboContent(type);
  var selectByDefault = element.id[element.id.length - 1];
  element.options[parseInt(selectByDefault) - 1].selected = 'selected';
}

function insertTypes(element) {
  element.innerHTML = "";
  element.innerHTML = getComboTypes();
}
