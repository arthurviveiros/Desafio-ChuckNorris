function mandapiada() {
    const chucksite = 'https://api.chucknorris.io/jokes/random';
    fetch(chucksite, {
        method: 'get' // opcional 
    })
    .then((piada) => piada.json())
    .then(function(piada) { 
        
        document.getElementById("textobox").innerHTML = piada.id;
    })
    .catch(function(err) { 
        console.error(err); 
    });
}