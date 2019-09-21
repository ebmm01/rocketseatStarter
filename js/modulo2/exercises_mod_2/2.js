var nomes = ["Diego", "Gabriel", "Lucas"];
var ulElement = document.querySelector('#app2 ul')

// Vale salientar que não é recomendado usar for .. in .. porque ele é usado pra enumerar itens, então não fuuncionaria corretamente
for (var nome of nomes) {
    var elem = document.createElement('li')
    elem.innerText = nome;

    ulElement.appendChild(elem)
}

var inputElement = document.querySelector("#app2 input")

function adicionar() {
    var elem = document.createElement('li')
    elem.innerText = inputElement.value;
    ulElement.appendChild(elem)
    inputElement.value = ""
}