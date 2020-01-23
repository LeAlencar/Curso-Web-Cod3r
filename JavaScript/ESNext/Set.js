const times = new Set()

times.add("Corinthians")
times.add("Palmeiras")
times.add("Flamengo")
times.add("Vasco")
times.add("Palmeiras")

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has("Vasco"))
times.delete("Palmeiras")
console.log(times)

const nomes =  ['Raquel', 'Leandro', 'Raphael', 'Vinicius']
const nomesSet = new Set(nomes)

console.log(nomesSet)