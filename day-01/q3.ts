let Name: string = "noor ul huda"; // this save the name

console.log(Name.toLocaleUpperCase());  //this syntax convert alphabet into capital letter

console.log(Name.toLocaleLowerCase()); // this syntax convert alphabet into small lettter

console.log(
  Name.charAt(0).toLocaleUpperCase() + Name.slice(1).toLocaleLowerCase()
); // this syntax convert massage first letter in capital  and rest of alphabet in small letter
