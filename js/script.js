// il computer genera 16 numeri casuali senza ripetizioni
arrayNumeri = [];
arrayUtente = [];



// chiedo all'utente la difficoltà 

var difficoltà = parseInt(prompt("Segli la difficoltà inserendo 1, 2 o 3"));

while (difficoltà != 1 && difficoltà != 2 && difficoltà != 3) {
    alert("Scegli la difficoltà giusta");
    var difficoltà = parseInt(prompt("Segli la difficoltà inserendo 1, 2 o 3"));
}




// viene chiesto all'utente di inserire i numeri e verifico le condizioni di perdita della partita 



var message = false;

var semaforo = true;


switch(difficoltà) {
    case 1:
        while (arrayNumeri.length < 16) {
            var numeri = Math.floor(Math.random() * (100 - 1) + 1);
            if (arrayNumeri.includes(numeri) == false) {
                arrayNumeri.push(numeri);
            }
        }
        console.log(arrayNumeri);

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
        
        console.log(arrayUtente);
        
        // definisco il punteggio finale 
        
        for (i = 0; i < arrayUtente.length; i++) {
            var vincitore = (i + 1);
        }
        
        document.getElementById('punteggio').innerHTML += "Il tuo punteggiò è di " + vincitore;
        
        
        if (vincitore == 84) {
            document.getElementById('campione').innerHTML = "Complimenti hai vinto!"
        }

    break;

    case 2 :
        while (arrayNumeri.length < 16) {
            var numeri = Math.floor(Math.random() * (80 - 1) + 1);
            if (arrayNumeri.includes(numeri) == false) {
                arrayNumeri.push(numeri);
            }
        }
        console.log(arrayNumeri);

        while (arrayUtente.length < 64 && semaforo == true) {
            var utente = parseInt(prompt("Inserisci un numero"));
        
            for (i = 0; i < arrayNumeri.length; i++) {
                if (arrayNumeri[i] == utente) {
                    semaforo = false;
                    alert("hai perso");
                } 
            }
            if (semaforo == true) {
                if(utente >= 1 && utente <= 80) {
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
        
        console.log(arrayUtente);
        
        // definisco il punteggio finale 
        
        for (i = 0; i < arrayUtente.length; i++) {
            var vincitore = (i + 1);
        }
        
        document.getElementById('punteggio').innerHTML += "Il tuo punteggiò è di " + vincitore;
        
        
        if (vincitore == 64) {
            document.getElementById('campione').innerHTML = "Complimenti hai vinto!"
        }

        break;
        
        case 3:

        while (arrayNumeri.length < 16) {
            var numeri = Math.floor(Math.random() * (50 - 1) + 1);
            if (arrayNumeri.includes(numeri) == false) {
                arrayNumeri.push(numeri);
            }
        }
        console.log(arrayNumeri);

        while (arrayUtente.length < 34 && semaforo == true) {
            var utente = parseInt(prompt("Inserisci un numero"));
        
            for (i = 0; i < arrayNumeri.length; i++) {
                if (arrayNumeri[i] == utente) {
                    semaforo = false;
                    alert("hai perso");
                } 
            }
            if (semaforo == true) {
                if(utente >= 1 && utente <= 50) {
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
        
        console.log(arrayUtente);
        
        // definisco il punteggio finale 
        
        for (i = 0; i < arrayUtente.length; i++) {
            var vincitore = (i + 1);
        }
        
        document.getElementById('punteggio').innerHTML += "Il tuo punteggiò è di " + vincitore;
        
        
        if (vincitore == 34) {
            document.getElementById('campione').innerHTML = "Complimenti hai vinto!"
        }

        break;
}













