// il computer genera 16 numeri casuali senza ripetizioni
arrayNumeri = [];

while (arrayNumeri.length < 16) {
    var numeri = Math.floor(Math.random() * (50 - 1) + 1);
    if (arrayNumeri.includes(numeri) == false) {
        arrayNumeri.push(numeri)
    }
}

console.log(arrayNumeri);
