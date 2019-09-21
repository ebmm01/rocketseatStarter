var btnSend = document.querySelector("#send");
var card = document.querySelector('.card');

btnSend.onclick = function() {
    var elem = document.createElement('div')
    elem.style.width = 100;
    elem.style.height = 100;
    elem.style.backgroundColor = 'red';
    elem.style.marginTop = 20;

    elem.setAttribute('onmouseover', 'changeColor(this)');
    card.appendChild(elem);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(elem) {
    elem.style.backgroundColor = getRandomColor()
}