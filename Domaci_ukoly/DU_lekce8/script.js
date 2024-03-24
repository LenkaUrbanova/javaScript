function justFoodCompany(numPeople) {
    const pricePerPerson = 10; // Price per person
    const totalPrice = numPeople * pricePerPerson;
    return `Catering from Just Food for ${numPeople} people costs ${totalPrice}`;
}
/* 
function justFoodCompany(numPeople) {
    const pricePerPerson = 10; // Example price per person
    const totalPrice = numPeople * pricePerPerson;
    return 'Catering by Just Food Company for ' + numPeople + ' people for £' + totalPrice;
*/
function yourMamaCopmany(numPeople) {
    const pricePerPerson = 20; // Price per person
    const totalPrice = numPeople * pricePerPerson;
    return `Catering from Your Mamma for ${numPeople} people costs ${totalPrice}`;
}

function flavourHeavenCompany(numPeople) {
    const pricePerPerson = 30; // Price per person
    const totalPrice = numPeople * pricePerPerson;
    return `Catering from Flavour Haven for ${numPeople} people costs ${totalPrice}`;
}

console.log(justFoodCompany(11)); 
console.log(yourMamaCopmany(75)); 
console.log(flavourHeavenCompany(100)); 

function createEvent (nameOfEvent, numPeople, NewCateringFunction) {
    const cateringDetails = NewCateringFunction (numPeople);
    return `${nameOfEvent} event with  ${cateringDetails}`;
}

console.log(createEvent("Inauguration", 100, flavourHeavenCompany));




/*Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu

Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč
*/
