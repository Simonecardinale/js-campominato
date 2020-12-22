// il computer genera 16 numeri casuali senza ripetizioni
arrayNumeri = [];
arrayUtente = [];

while (arrayNumeri.length < 16) {
    var numeri = Math.floor(Math.random() * (100 - 1) + 1);
    if (arrayNumeri.includes(numeri) == false) {
        arrayNumeri.push(numeri);
    }
}
console.log(arrayNumeri);





// viene chiesto all'utente di inserire i numeri e verifico le condizioni di perdita della partita 



var message = false;

var semaforo = true;


while (arrayUtente.length < 84 && semaforo == true) {
    var utente = parseInt(prompt("Inserisci un numero"));

    for (i = 0; i < arrayNumeri.length; i++) {
        if (arrayNumeri[i] == utente) {
            semaforo = false;
            alert("hai perso");
        } 
    }
    if (semaforo == true) {
        if(utente >= 1 && utente <= 100) {
            message = true;
            // console.log(utente);
        } else {
            message = false;
        }
        if ((arrayUtente.includes(utente) == false) && (message == true)) {
            arrayUtente.push(utente);
        } else if (message == false) {
            alert("Intervallo errato");
        } else {
            alert("Non puoi inserire lo stesso numero più volte");
        }
    }
}

for (i = 0; i < arrayUtente.length; i++) {
    var vincitore = (i + 1);
}

document.getElementById('punteggio').innerHTML += "Il tuo punteggiò è di " + vincitore;












