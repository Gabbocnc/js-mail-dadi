//Mail : Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


// creo una lista di chi puo accedere

let access = [
    'example@gmail.com'
]

// chiedo all utente l email

let email = prompt('Inserisci la tua email');

//faccio un check dell email all interno della lista e stampo i messaggi 

if (access.includes(email)){
    alert('Welcome');
    
}else{
   alert('Non hai accesso a questo sito');
}





//Dadi : Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// creo variabile Player dove vado a generare un numero casuale da 1 a 6

let player = Math.floor(Math.random() * 6) + 1;

// creo variabile pc dove vado a generare un numero casuale da 1 a 6

let pc = Math.floor(Math.random() * 6) + 1;

alert(`Il player ha tirato: ${player}`);
alert(`Il pc ha tirato: ${pc}`);

//check dei numeri 

if (player > pc){
    alert('Player Win');
}else if (pc > player){
    alert('Pc Win');
}else{
    alert('Pareggio');
}

console.log(player);
console.log(pc);

