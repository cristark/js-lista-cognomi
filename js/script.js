/* Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova */

// Creo array con cognomi esistenti
var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log(surnameList);

// Chiedo all'utente di inserire il cognome
var yourSurname = prompt('Inserisci il tuo cognome');
console.log(yourSurname);

// Converto la prima lettera in maiuscolo
yourSurname = yourSurname.charAt(0).toUpperCase() + yourSurname.substring(1);
console.log(yourSurname);

// Inserisco il cognome dell'utente nell'array
surnameList.push(yourSurname);
console.log(surnameList);

//Ordino i cognomi dell'array in ordine alfabetico
surnameList.sort();
console.log(surnameList);

