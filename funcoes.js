/*app.js*/
function calculaidade(anonasc) {
  return 2022 - (anonasc);
}
module.exports.calculaidade = calculaidade;

module.exports.calculaimc = function (peso, altura) {
	return peso / (altura * altura);
}

