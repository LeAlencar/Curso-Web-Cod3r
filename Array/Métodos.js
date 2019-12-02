const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]

pilotos.pop() // retira o último elemento do array.
console.log(pilotos)

pilotos.push("Verstappen") // adiciona novo elemento.
console.log(pilotos)

pilotos.shift()//retira primeiro elemento.
console.log(pilotos)

pilotos.unshift("Vettel")//coloca na primeira pos.
console.log(pilotos)

// Splice pode adicionar e remover elementos.

//adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array
console.log(algunsPilotos)