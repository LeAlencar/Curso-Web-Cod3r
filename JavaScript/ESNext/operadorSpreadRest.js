// rest(juntar) / spread(espalhar)
// usar rest como param de func

//usar spread com obj
const funcionario = {nome: 'Maria', salario: 12348.99}

//pega todos os atributos do obj.
const clone = {ativo: true, ...funcionario}

console.log(clone)

//spread com array
const grupoA = ["João", "Pedro", "Miguel"]
const grupoFinal = ["Maria", ...grupoA, "Rafaela"]
console.log(grupoFinal)