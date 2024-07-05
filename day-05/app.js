var transports = ["Honda moterbike", "Suzuki car", "B.M.W"];
transports.forEach(function (transport) {
    console.log("I whould like my own ".concat(transport));
});
console.log("############################################");
var guests = ["safdar", "Aamar", "Rashid"];
guests.forEach(function (guest) {
    console.log(" Dear ".concat(guest, " whould you like to jion dinner with me?"));
});
//  question 15
var unAbleTOAttant = "Rashid";
console.log("Sorry ".concat(unAbleTOAttant, " I can attant dinner"));
var newGuest = "Arman Malick";
guests[guests.indexOf(unAbleTOAttant)] = newGuest;
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, " whould you like join with me to diinner"));
});
