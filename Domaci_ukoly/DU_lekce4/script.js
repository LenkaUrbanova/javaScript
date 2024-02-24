const jmeno = prompt("Zadej jméno bez diakritiky")
const prijmeni = prompt("Zadej příjmení bez diakritiky")
let email = (prijmeni.slice (0, 5))+(jmeno.slice (0, 3))+"@fit.cvut.cz"
email = (email.toLocaleLowerCase())
email = (email.trim())


document.body.innerHTML += email;




