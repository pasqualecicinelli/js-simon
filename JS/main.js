const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


/** 
* Mostra il Giorno, Ora, Minuti, Secondi, Millisecondi 
* e i Millisecondi che ci sono in quel momento 
*/
function showDay(now) {

    console.log('giorno: ' + now.getDay());
    console.log('ora: ' + now.getHours());
    console.log('min: ' + now.getMinutes());
    console.log('sec: ' + now.getSeconds());
    console.log('milSec: ' + now.getMilliseconds());
    console.log('millisecondi completo: ' + now.getTime());

}

let now = new Date();
let ora = showDay(now);

let tomorrow = new Date('2023, 8, 25, 9:00');
console.log(tomorrow);

let domani = showDay(tomorrow)

let resultMillS = subtraction(tomorrow.getTime(), now.getTime());
console.log(resultMillS);

const myTimeout = setInterval(countdown, 1000);

function countdown() {
    let ore = parseInt(resultMillS / (1000 * 60 * 60));
    let minuti = parseInt(resultMillS % (1000 * 60 * 60) / (1000 * 60));
    let secondi = parseInt(resultMillS % (1000 * 60 * 60) % (1000 * 60) / 1000);
    let giorno = parseInt(ore / 24);

    days.innerText = giorno;
    hours.innerText = ore;
    minutes.innerText = minuti;
    seconds.innerText = secondi;


    resultMillS = resultMillS - 1000;

    if (resultMillS <= 0) {
        clearInterval(myTimeout);
    }
    //console.log(giorno + '\n' + ore + '\n' + minuti + '\n' + secondi);
}
