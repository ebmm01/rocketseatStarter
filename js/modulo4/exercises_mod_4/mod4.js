// Exercício 1
function checaIdade(idade) {
    return new Promise( function(resolve, reject) {
        setTimeout(() => {
            if (idade >= 18) {
                resolve()
            }
            else {
                reject()
            }
        }, 2000);
    });
}

checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });

// Exercício 2 & 3
var btnSubmit = document.querySelector('#app .card button')
var inputElement = document.querySelector('#app .card input')
var listElement = document.querySelector('#app .repos ul')


btnSubmit.onclick = function() {
    listElement.innerHTML = 'Carregando...'
    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
        .then(function(response) {
            listElement.innerHTML = ""
            responseData = response;

            for (elem of responseData.data) {
                console.log(elem)
                var liElement = document.createElement('li');
                var textElement = document.createTextNode(elem.name);
        
                liElement.appendChild(textElement);
                listElement.appendChild(liElement)
            }
        })
        .catch(function(error) {
            listElement.innerHTML = 'Erro. Usuário não encontrado'
            console.warn(error);
        })
}
