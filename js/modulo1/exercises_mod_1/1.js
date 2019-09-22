// 1

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function enderecoDecoder(payload) {
    return `O usuário mora em ${payload.cidade} / ${payload.uf}, no bairro ${payload.bairro}, na rua "${payload.rua}" com nº ${payload.numero}.`
}

console.log(enderecoDecoder(endereco))

// 2 

function pares(x,y) {
    for (i = x; i<= y; i++) {
        if(i % 2 == 0)  console.log(i) ; 
    }
}
pares(32,40);

// 3

function temHabilidade(skills) {
    return skills.indexOf('Javascript') !== -1 ? true : false
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills)); 

// 4

function experiencia(anos) {
    if (anos <=1) {
        console.log('Iniciante')
    }
    else if ( anos > 1 && anos <= 3) {
        console.log('Intermediário')
    }
    else if (3 < anos && anos <= 6 ) {
        console.log('Avançado')
    } else {
        console.log('Jedi master')
    }
}

var anosEstudo = 7;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

// 5 

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function returnHabilidades(payload) {
    for (user of payload) {
        console.log(`O ${user.nome} possui as habilidades: ${user.habilidades.join(', ')}`)
    }
}
returnHabilidades(usuarios)