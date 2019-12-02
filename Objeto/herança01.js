const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// ver quem seria o obj pai
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)

//Object.prototype n tem uma herança maior
console.log(Object.prototype.__proto__)

function MeuObjeto() {}
//MeuObjeto tem uma heranã diferente, pois foi criada
console.log(Object.prototype, MeuObjeto.prototype)

