var emailUtente = prompt("inserisci la tua e-mail").toLocaleLowerCase()

var listaUtenti = ["pippo@gmail.com", "pippa@gmail.com", "pluto@gmail.com", "paperino@gmail.com"]



for (i = 0; i < listaUtenti.length; i++) {
    
    if (emailUtente == listaUtenti[i]) {
       console.log("vero"); 
    } else {console.log("falso");}

}

