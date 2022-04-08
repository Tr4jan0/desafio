/*app.js*/
const { calculaidade, calculaimc } = require('./funcoes.js');

const anonasc = process.argv[2];
const idade = calculaidade(anonasc);
const peso = process.argv[3];
const altura = process.argv[4];
const imc = calculaimc(peso, altura)

console.log(`${idade} anos de idade`);
console.log(`${imc} imc`);