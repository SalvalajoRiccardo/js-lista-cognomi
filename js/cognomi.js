var nUtente = prompt("Quale è il tuo cognome?");

console.log(nUtente);

var cognomi = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli'];

cognomi.push(nUtente);
cognomi.sort();
console.log(cognomi);

document.getElementById("risultato").innerHTML = "posizione: " + (cognomi.indexOf(nUtente) + 1);