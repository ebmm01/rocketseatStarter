
function mostraAlerta(msg) {
    alert(msg);
}

//var inputElement = document.getElementById('inputapp')
var inputElement = document.querySelector('#inputapp');
var btnElement = document.querySelector('button.botao');

btnElement.onclick = function(){
    var text = inputElement.value;

    alert(text)
}
console.log(inputElement)

var linkElement = document.createElement('a');
var textElement = document.createTextNode('Link qualquer')
linkElement.setAttribute('href', '#')

linkElement.appendChild(textElement)

var containerElement = document.querySelector("#app3")
containerElement.appendChild(linkElement)

var boxElement = document.querySelector(".box")

boxElement.style.width = 100;
boxElement.style.height = 100;
boxElement.style.backgroundColor = '#f00'
