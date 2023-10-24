// RACCOLTA DATI

// Generare numero casuale da 1 a 6 per il giocatore
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

// Generare numero casuale da 1 a 6 per il computer
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(computerNumber);

// LOGICA DEL PROGRAMMA

if (userNumber > computerNumber) {
    console.log("Well done, you won!");
} else if (computerNumber > userNumber) {
    console.log("You lost! Try again!");
} else {
    console.log("It's a tie!");
}