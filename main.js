// creo una lista di chi puo accedere
let access = ['']

// chiedo all utente l email
let mail = prompt('Inserisci la tua email');

//faccio un check dell email all interno della lista e stampo i messaggi 
if (mail=access.includes(mail)){
    alert('Welcome');
    
}else{
   alert('Non hai accesso a questo sito');
}