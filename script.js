let botaochuck   = document.getElementById('botaochuck')
let pedidopiada  = new XMLHttpRequest();
pedidopiada.open('GET', 'https://api.chucknorris.io/jokes/random', true);
pedidopiada.send();

pedidopiada.onload = function () {
    var data = JSON.parse(this.response);
    document.getElementById("textboxpiada").innerHTML = data.value;
}
botaochuck.addEventListener("click", pedidopiada);
