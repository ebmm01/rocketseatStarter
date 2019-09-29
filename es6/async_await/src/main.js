import axios from 'axios';

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Ok') }, 2000);
})

// minhaPromise().then(response => ...) 

async function executaPromise() {
    const response = await minhaPromise();

    console.log(response);
}

executaPromise();

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`http://api.github.com/users/${username}`)
            console.log(response);
        } catch(error) {
            console.log('Erro na API');
        }
        
    }
}

Api.getUserInfo('ebmm01');
Api.getUserInfo('ebmm0112123');

// Exercícios
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');
//         delay().then(() => {
//             console.log('2s');
//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }

async function umPorSegundo() {
    await delay();
    console.log("1s")
    await delay();
    console.log("2s");
    await delay();
    console.log("3s");
}

umPorSegundo();

// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/repos/${repo}`)
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(err => {
//                 console.log('Repositório não existe');
//             })
//     }
// }

class Github {
    static async getRepositories(repo) {
        try {
            let response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data);
        } catch(error) {
            console.log("Repositório não existe")
        }
    }
}

Github.getRepositories('Rocketseat/docs');
Github.getRepositories('rocketseat/dslkvmskv');

// const buscaUsuario = usuario => {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         });
// }

const buscaUsuario = async usuario => {
    try {
        let response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    } catch(error) {
        console.log('Usuário não existe');
    }
}

buscaUsuario('ebmm01');