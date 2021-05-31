var nUtente = prompt("Quale è il tuo cognome?");

var nUtenteCap =  nUtente.charAt(0).toUpperCase() + nUtente.slice (1)

console.log(nUtenteCap);

var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

cognomi.push(nUtenteCap);
cognomi.sort();
console.log(cognomi);

document.getElementById("risultato").innerHTML = "posizione: " + (cognomi.indexOf(nUtenteCap) + 1);