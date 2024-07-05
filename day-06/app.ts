let guests:string[] =["Ammar", "Tahir", "Rashid"];

console.log("Great news! we found a big denner table ... we invite more guessts");

guests.push("Arman Malick");
guests.splice(guests.length / 2, 0, "Kalim ud din");
guests.unshift("Imran");
 

guests.forEach(guest => {
    console.log(`Dear ${guest} whould you like to join me for dinner`);
});

// Q 14: Answer

console.log(" sorry unfortunaltely i can invite only two persons");

while ( guests.length > 2) {
    let removeGuests = guests.pop();
    console.log(` Sorry ${ removeGuests} i can't invite you`);

}

guests.forEach( guest => {
    console.log(` dear ${guest} you are stil invite for dinner`);
});

guests.splice( 0 , guests.length);
console.log(guests);
