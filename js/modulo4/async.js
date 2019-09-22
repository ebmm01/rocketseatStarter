// Requisições ajax
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/ebmm01')
xhr.send(null)

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}

// Promises

var myPromise = function() {
    return new Promise( function(resolve, reject) {
        var xhrPromise = new XMLHttpRequest();
        xhrPromise.open('GET', 'https://api.github.com/users/ebmm01');
        xhrPromise.send(null);

        xhrPromise.onreadystatechange = function() {
            if (xhrPromise.readyState === 4) {
                if (xhrPromise.status === 200) {
                    resolve(JSON.parse(xhrPromise.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

myPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    })

// Axios

axios.get('https://api.github.com/users/ebmm01')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    })