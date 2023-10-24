# Consegna

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

## Soluzione

### Raccolta Dati
1. Array di indirizzi email registrati che possono accedere
2. Tramite prompt o input ottenere l'email dell'utente


### Logica del programma
1. Inizializzare il flag per segnalare se l'indirizzo email è stato trovato 
2. Scorrere array; per ogni indirizzo email:
    - SE elemento è uguale a email dell'utente
        - Metto il flag a true
3. Dopo il ciclo for
    - SE flag è true
        - Stampare un messaggio che rappresenti l'accesso consentito
    - ALTRIMENTI
        - Stampare un messaggio che rappresenti l'accesso negato
        
