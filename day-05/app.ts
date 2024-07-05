let transports: string[] = ["Honda moterbike","Suzuki car","B.M.W"];


transports.forEach(transport =>{
    console.log(`I whould like my own ${transport}`);
} );

console.log("############################################");

let guests: string[] = ["safdar", "Aamar", "Rashid"];

guests.forEach(guest => {
    console.log(` Dear ${guest} whould you like to jion dinner with me?`);
});


//  question 15

let unAbleTOAttant = "Rashid" ;

console.log( `Sorry ${unAbleTOAttant} I can"t attant dinner`);

let newGuest = "Arman Malick";

 guests[guests.indexOf(unAbleTOAttant)] =newGuest;

 guests.forEach(guest => {
    console.log( `Dear ${guest} whould you like join with me to diinner`);
 })