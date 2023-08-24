// Inserendo un (MAX e MIN) = Range genera un numero casuale 

function getRandomNumber(min, max) {

    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

// Inserendo 2 numeri restituisce una somma (anche di un array)

function getSum(firstElement, secondElement) {

    let somma = firstElement += secondElement;
    return somma;
}

// Sottrae il primo elemento con il secondo
function subtraction(firstElement, seconndElement) {

    return parseInt(firstElement - seconndElement);
}

// Questa funzione calcola solo il maggiore di 3 elementi

//let maggiore = 0;

function getMaggiore(firstNumber, secondNumber, thirdNumber) {

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        maggiore = firstNumber;
        // console.log('1 Il Maggiore è: ' + firstNumber)
    } else if (secondNumber > thirdNumber) {
        maggiore = secondNumber;
        // console.log('2 Il Maggiore è: ' + secondNumber)
    } else if (thirdNumber > firstNumber) {
        maggiore = thirdNumber;
        //console.log('3 Il Maggiore è: ' + thirdNumber)
    }
    return maggiore;
}

/*maggiore = getMaggiore(firstNumber, secondNumber, thirdNumber);

console.log('Il Maggiore è: ' + maggiore);*/


// Questa funzione calcola solo il minore di 3 elementi

//let minore=0;

function getMinore(firstNumber, secondNumber, thirdNumber) {

    if (firstNumber < secondNumber && firstNumber < thirdNumber) {
        minore = firstNumber;
        // console.log('1 Il minore è: ' + firstNumber)
    } else if (secondNumber < thirdNumber) {
        minore = secondNumber;
        // console.log('2 Il minore è: ' + secondNumber)
    } else if (thirdNumber < firstNumber) {
        minore = thirdNumber;
        //console.log('3 Il minore è: ' + thirdNumber)
    }
    return minore;
}

/*minore = getMinore(firstNumber, secondNumber, thirdNumber);

console.log('Il minore è: ' + minore);*/

//questa funzione restituisce il maggiore, il minore e se sono uguali

function getMaggioreMinoreUguali(firstNumber, secondNumber, thirdNumber) {

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {

        if (secondNumber > thirdNumber) {
            return messageMag = ('Il primo è Maggiore: ' + firstNumber),
                messageMin = ('Il terzo è Minore: ' + thirdNumber);
        } else if (secondNumber < thirdNumber) {
            return messageMag = ('Il primo è Maggiore: ' + firstNumber),
                messageMin = ('Il secondo è Minore: ' + secondNumber);
        } else if (secondNumber == thirdNumber) {
            return messageMag = ('Il primo è Maggiore: ' + firstNumber),
                messageMin = ('Il secondo è il terzo sono Minori: ' + secondNumber);
        }
    } else if (firstNumber == secondNumber && firstNumber > thirdNumber) {
        return messageMag = ('Il primo e il secondo sono Maggiori: ' + firstNumber),
            messageMin = ('Il terzo è Minore: ' + thirdNumber);
    } else if (secondNumber == thirdNumber && secondNumber > firstNumber) {
        return messageMag = ('Il secondo e il terzo sono Maggiori: ' + secondNumber),
            messageMin = ('Il primo è Minore: ' + firstNumber);
    } else if (firstNumber == thirdNumber && firstNumber > secondNumber) {
        return messageMag = ('Il primo e il terzo sono Maggiori: ' + firstNumber),
            messageMin = ('Il secondo è Minore: ' + secondNumber);

    } else if (secondNumber > thirdNumber) {

        if (firstNumber > thirdNumber) {
            return messageMag = ('Il secondo è Maggiore: ' + secondNumber), messageMin = ('Il terzo è il Minore: ' + thirdNumber);
        } else if (firstNumber < thirdNumber) {
            return messageMag = ('Il secondo è Maggiore: ' + secondNumber), messageMin = ('Il primo è Minore: ' + firstNumber);
        } else if (firstNumber == thirdNumber) {
            return messageMag = ('Il secondo è Maggiore: ' + secondNumber), messageMin = ('Il primo e il terzo sono Minori: ' + firstNumber);
        }
    } else if (thirdNumber > firstNumber) {

        if (secondNumber > firstNumber) {
            return messageMag = ('Il terzo è Maggiore: ' + thirdNumber), messageMin = ('Il primo è Minore: ' + firstNumber);
        } else if (secondNumber < firstNumber) {
            return messageMag = ('Il terzo è Maggiore: ' + thirdNumber), messageMin = ('Il secondo è Minore: ' + secondNumber);
        } else if (firstNumber == secondNumber) {
            return messageMag = ('Il terzo è Maggiore: ' + thirdNumber), messageMin = ('Il primo e il secondo sono Minori: ' + firstNumber);
        }

    } else if (firstNumber == secondNumber && firstNumber == thirdNumber) {
        return messageUguali = ('Sono tutti uguali');

    }
}
/*
let messageMag = '';
let messageMin = '';
let messageUguali = '';
let result = getMaggioreMinoreUguali(firstNumber, secondNumber, thirdNumber);
alert(messageMag + '\n' + messageMin + messageUguali);*/