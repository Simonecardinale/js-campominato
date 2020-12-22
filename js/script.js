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
    if(utente > 10) {
        message = true;
        console.log(utente);
    } else {
        message = false;
    }
    if ((arrayUtente.includes(utente) == false) && (message == true)) {
        var = numeroAccettato
        arrayUtente.push(utente);
    } else if (message == false) {
        alert("Intervallo errato");
    } else {
        alert("Non puoi inserire lo stesso numero più volte");
    }
}
console.log(arrayUtente);

// condizioni di perdita









