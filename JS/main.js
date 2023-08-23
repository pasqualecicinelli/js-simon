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

let tomorrow = new Date('2023, 8, 24, 9:30');
console.log(tomorrow);

let domani = showDay(tomorrow)

let resultMillS = subtraction(tomorrow.getTime(), now.getTime());
console.log(resultMillS);

let secondi = parseInt(resultMillS % 100);
let minuti = parseInt(secondi / 60);
let ore = parseInt(minuti / 60);
let giorno = parseInt(ore / 24);

days.innerText = giorno;

console.log(giorno + '\n' + ore + '\n' + minuti + '\n' + secondi);

let time = resultMillS;

function countdown() {
    


    
}
