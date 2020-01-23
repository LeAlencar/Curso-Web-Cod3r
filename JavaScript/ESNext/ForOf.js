for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

//tira a pos no array(0, 1, 2) IN
for (let i in assuntosEcma) {
    console.log(i)
}

// tira o Array(Map, Set, Promise) OF
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

// usado p percorrer chave e valor
for (let assunto of assuntosMap) {
    console.log(assunto)
}

//keys seleciona apenas as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

//values para valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

//junta keys e values
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}
