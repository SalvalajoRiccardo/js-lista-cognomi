var emailUtente = prompt("inserisci la tua e-mail").toLocaleLowerCase();

var listaUtenti = ["pippo@gmail.com", "pippa@gmail.com", "pluto@gmail.com", "paperino@gmail.com"];

var risultato = "non ammesso";
console.log(emailUtente);

var i = 0
for (i = 0; i < listaUtenti.length; i++) {
    console.log(listaUtenti[i]);
    if (emailUtente == listaUtenti[i]) {
        risultato = "Ammesso";
    
    console.log(risultato);}

}

document.getElementById("risultato").innerHTML = risultato;