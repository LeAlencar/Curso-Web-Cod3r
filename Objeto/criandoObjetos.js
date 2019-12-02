// notação literal (não é JSON)

const obj1 = {nome: 'Leandro', idade: 16}
console.log(obj1);

// Object em JS

const obj2 = new Object
obj2.nome = 'Leandro'
obj2.idade = 16
console.log(obj2);

// Funções Construtoras

function Produto(nome, preco, desc) {
    this.nome = nome
    this.getDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
console.log(p1.getDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("leandro", 1000, 4)
console.log(f1.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Analu'
console.log(filha)

// uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)