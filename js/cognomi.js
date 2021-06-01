var nUtente = prompt("Quale è il tuo cognome?");

var nUtenteCap =  nUtente.charAt(0).toUpperCase() + nUtente.slice (1)

console.log(nUtenteCap);

var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

cognomi.push(nUtenteCap);
cognomi.sort();

for (var i = 0; i < cognomi.length; i++) {
    document.getElementById("risultato").innerHTML += cognomi[i] + '<br>';
    if (cognomi[i] == nUtenteCap) {
        document.getElementById("posizione").innerHTML = 'posizione: ' + (i + 1) ;
    }
}


// document.getElementById("risultato").innerHTML = "posizione: " + (cognomi.indexOf(nUtenteCap) + 1);