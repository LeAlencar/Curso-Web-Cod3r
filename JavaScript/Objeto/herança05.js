console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

/* Criada uma função no protótipo de String, nesse caso a de reverter string
algo bem útil por exemplo
*/

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Centro Educacional Paineira'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 0, 3, 5].first())