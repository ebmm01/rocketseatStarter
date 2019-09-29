class List {
    // Método que é sempre instanciado quando o objeto é criado
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        // Chamar o constructor da classe pai
        super();

        this.usuario = 'Elias Bernardo';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const Minhalista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    Minhalista.add('Novo todo');
}

Minhalista.mostraUsuario();

//
// Operações com arrays
//

const arr = [1,2,3,4,5,8,9];

// Map: passo e executo uma função por todo os itens da array
const newArr = arr.map(function(item,index) {
    return item + index;
});

console.log(newArr)

// Reduce:
const sum = arr.reduce(function(total,next) {
    return total + next;
});

console.log(sum);

// Filter:
const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter)

// Find:
const find = arr.find(function(item) {
    return item === 4;
});

console.log(find);

//
// Arrow Functions & valores padrões
//
const newArr2 = arr.map(item => item + 2);

console.log(newArr2);

const soma = (a = 0, b = 0) => a + b;


// 
// Desestruturação
//
const usuario = {
    nome: 'Elias Bernardo',
    idade: 22,
    endereco: {
        cidade: 'Brasília',
        estado: 'DF',
    },
};

const { nome, idade, endereco: {cidade}} = usuario;
console.log(nome, idade, cidade)

function mostraNome({nome, idade}) {
    console.log(nome, idade);
};

mostraNome(usuario);

//
// Rest & spread
//

// Rest
// Exemplo 1
const usuario2 = {
    nome2: 'Elias Bernardo',
    idade: 22,
    empresa: 'Empresa'
}

const { nome2, ...resto} = usuario2;
console.log(nome2);
console.log(resto);

// Rest
// Exemplo 2
const arr3 = [1,2,3,4,5];
const [a,b, ...c] = arr3;
console.log(a,b,c);

// Rest
// Exemplo 3
function soma_rest(...params) {
    return params.reduce((total,next) => total + next);
}
console.log(soma_rest(1,3,5))

// Spread
// Exemplo 1
const arr_spread = [1,2,3];
const arr_spread2 = [4,5,6];

const arr_spread3 = [...arr_spread, ...arr_spread2];

console.log(arr_spread3);

// Spread
// Exemplo 2
const usuario_spread = {
    nome: 'Elias Bernardo',
    idade: 22,
    empresa: "EB",
};

const usuario_spread2 = { ...usuario_spread, nome: 'Elias Bernardo Marques Magalhães'};

console.log(usuario_spread2);

//
// Template Literals
//

const nome_template_literals = "Elias Bernardo";
const idade_template_literals = 22;

//console.log('Meu nome é '+ nome_template_literals + ' e tenho ' + idade + ' anos.')
console.log(` Meu nome é ${nome_template_literals} e tenho ${idade_template_literals} anos.`);

//
// Object Short Syntax
//

const nome_oss = "Elias Bernardo";
const idade_oss = 22;

const usuario_oss = {
    nome_oss, // nome_oss: nome_oss,
    idade_oss, // idade_oss: idade_oss,
    empresa: "EB",
};