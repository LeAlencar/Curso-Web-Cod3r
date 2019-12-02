const contadorA = require('./InstanciaUnica')
const contadorB = require('./InstanciaUnica')
const contadorC = require('./InstanciaNova')()
const contadorD = require('./InstanciaNova')()

contadorA.inc()
contadorA.inc()

//Mesmo sendo o contadorA incrementado, ambos vêm do msm require.
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()

//Nesse caso func factory nao guarda cache, oq muda somente uma das var.
console.log(contadorC.valor, contadorD.valor)
