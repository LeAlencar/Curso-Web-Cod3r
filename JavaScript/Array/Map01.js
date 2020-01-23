const nums = [1, 2, 3, 4, 5]

// for com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(nums)
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(dinheiro)

console.log(resultado)