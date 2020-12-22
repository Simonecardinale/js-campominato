// il computer genera 16 numeri casuali senza ripetizioni
arrayNumeri = [];
arrayUtente = [];

while (arrayNumeri.length < 16) {
    var numeri = Math.floor(Math.random() * (20 - 1) + 1);
    if (arrayNumeri.includes(numeri) == false) {
        arrayNumeri.push(numeri);
    }
}
console.log(arrayNumeri);





// viene chiesto all'utente di inserire i numeri 



message = false;


while (arrayUtente.length < 4) {
    var utente = parseInt(prompt("Inserisci un numero"));

    for (i = 0; i < arrayNumeri.length; i++) {
        if (arrayNumeri[i] == utente) {
            semaforo = false;
        } else {
            semaforo = true;
        }
    }

    if(utente >= 1 && utente <= 20) {
        message = true;
        console.log(utente);
    } else {
        message = false;
    }
    if ((arrayUtente.includes(utente) == false) && (message == true) && (semaforo == true)) {
        arrayUtente.push(utente);
    } else if (message == false) {
        alert("Intervallo errato");
    } else if (semaforo == false) {
        alert ("hai perso")
    }else {
        alert("Non puoi inserire lo stesso numero più volte");
    }
}

console.log(arrayUtente);











