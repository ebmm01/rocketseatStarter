// Exercise 1
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email,senha) {
        super();
        this.email = email;
        this.senha = senha;
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

// Exercise 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 
const idades = usuarios.map(function(elem) {
    return elem.idade
});
console.log("Exercício 2.1:", idades);

// 2.2
const filtro = usuarios.filter(function(elem) {
    return elem.idade > 18 && elem.empresa === 'Rocketseat'
});
console.log("Exercício 2.2:", filtro);

// 2.3 
const findGoogle = usuarios.find(function(elem) {
    return elem.empresa === "Google";
});
console.log("Exercício 2.3:", findGoogle);

// 2.4 
const newArr = usuarios.map(function(elem) {
    elem.idade = elem.idade * 2;
    return  elem
}).filter(function(elem) {
    return elem.idade < 50;
});

console.log("Exercício 2.4: ",newArr);

// 3.1
const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
    return item + 10;
});

console.log("Exercício 3.1: ",arr.map(item => item + 10))

// 3.2
const usuario = { nome: 'Diego', idade: 23 };

// function mostraIdade(usuario) {
//     return usuario.idade;
// };

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));


// 3.3
const nome = "Diego";
const idade = 23;

// function mostraUsuario(nome = 'Diego', idade = 18) {
//     return { nome, idade };
// }

const mostraUsuario = (nome = 'Elias', idade = 22) => ({nome, idade})

console.log("Exercicio 3.3: ",mostraUsuario(nome, idade));
console.log("Exercicio 3.3: ",mostraUsuario(nome));

// 3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
// }

const promise = () => new Promise((resolve, reject) => resolve())

console.log("Exercicio 3.4: ", promise());

// 4.1

const empresa = {
    nome2: 'Rocketseat',
    endereco: {
        cidade2: 'Rio do Sul',
        estado2: 'SC',
    }
};
const {nome2, endereco: { cidade2, estado2}} = empresa;
console.log("Exercício 4.1: ", nome2, cidade2 , estado2);

// 4.2 

function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}

console.log("Exercício 4.2: ", mostraInfo({nome: 'Elias', idade: 22}));

// 5.1 

const arrNum = [1, 2, 3, 4, 5, 6]
let [x,...y] = arrNum;
console.log(x);
console.log(y);

const soma = (...nums) => ( nums.reduce((num,prox) => ( num + prox )))
console.log(soma(1,2,3));

// 5.2

const usuario3 = {
    nome3: 'Diego',
    idade3: 23,
    endereco3: {
        cidade3: 'Rio do Sul',
        uf3: 'SC',
        pais3: 'Brasil',
    }
};

let usuario_2 = {...usuario3, nome3: "Não é diego"};
let usuario_3 = {...usuario3, endereco3: {...usuario3.endereco3, cidade3: 'DF'} };

console.log("Exercício 5.2:", usuario_2, usuario_3);

// 6

const usuario_tl = 'Diego';
const idade_tl = 23;
console.log(`Exercício 6: O usuário ${usuario_tl} possui ${idade_tl} anos`);

// 7 

const nome_oss = 'Diego';
const idade_oss = 23;

const usuario_oss = {
    nome_oss,
    idade_oss,
    cidade: 'Rio do Sul',
};

console.log("Exercício 7:", usuario_oss);