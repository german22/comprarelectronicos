function getComboContent(type){
var models = getNameByType(type);
return buildComboOptions(models);
}

function getComboTypes(){
var models = getTypes();
return buildComboOptionsType(models);
}

function buildComboOptions(models){
  var option = '<option value="model" >name</option>';
  var contentRet = "";
  models.forEach(function(model)
    {
        var optionAux = option;
        optionAux = optionAux.replace("model",model.name);
        optionAux = optionAux.replace("name",model.name);
		contentRet = contentRet.concat(optionAux);
    });
    return contentRet;
}

function buildComboOptionsType(models){
  var option = '<option value="model">name</option>';
  var contentRet = '<option value="" selected>Seleccionar producto</option>';
  models.forEach(function(model)
    {
        var optionAux = option;
        optionAux = optionAux.replace("model",model.idProduct);
        optionAux = optionAux.replace("name",model.name);
		contentRet = contentRet.concat(optionAux);
    });
    return contentRet;
}
