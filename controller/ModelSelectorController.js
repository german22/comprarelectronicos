function getComboContent(type){
var models = getNameByType(type);
  var option = '<option value="model" selected="">name</option>';
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
