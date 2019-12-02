function compras(trab1, trab2) {
    // || = ou
    const sorvete = trab1 || trab2
    // && = and
    const tv50 = trab1 && trab2
    // operador ou exclusivo
    //const tv32 = !!(trab1 ^ trab2) // bitwise xor
    const tv32 = trab1 != trab2
    const saudavel = !sorvete

    return { sorvete: sorvete, tv50, tv32, saudavel }

}

console.log(compras(true, true))
