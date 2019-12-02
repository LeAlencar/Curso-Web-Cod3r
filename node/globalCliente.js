require('./global')

console.log(MinhaApp.saudacao())

//se n usar o Object.freeze ficara modificavel
MinhaApp.nome = 'Eita'
console.log(MinhaApp.nome)