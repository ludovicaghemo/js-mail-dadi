const email = ["ludovica@booleancareers.it", "francesco@booleancareers.it", "marco@booleancareers.it", "giulia@booleancareers.it", "federica@booleancareers.it", "gianluca@booleancareers.it", "ettore@booleancareers.it", "filippo@booleancareers.it"]; 

const userEmail = prompt("Hello user! What's your email address?");
console.log(userEmail);

let allowed = false;

for (let i = 0; i < email.length; i++) {
    const curEmail = email[i];
    //prenditi l'iesimo elemento di email

    if(curEmail === userEmail) {
        allowed = true;
    }

    console.log(curEmail, userEmail, allowed);
}

if(allowed === true) {
    console.log("Access allowed");
} else {
    console.log("Access denied");
}