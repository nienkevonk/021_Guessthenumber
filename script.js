var welcome = prompt("Welkom! Wat is je naam?");
alert("Hey " + welcome)

max = parseInt(prompt("Tot welk nummer mag er geraden worden?"));
min = 0;
var K = 5;

let randomnumber = Math.floor(Math.random() * (max - min)) + min;
console.log(randomnumber);

var numberchoosen = prompt("Voer een nummer in van 0 tot " + max + " om te beginnen met raden..")
console.log(numberchoosen);

for (i = 0; i < K; i++) {
    let z = parseInt(numberchoosen);
    if (z == randomnumber) {
        alert("Gefeliciteerd! Je hebt het goed.");
    } else if (z !== randomnumber && i != K - 1) {
        alert('Helaas. Je hebt het niet goed!');
        numberchoosen = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden..");
    }
};

if (i == K) {
    alert("Helaas. Je beurten zijn op.");
}

alert("We sluiten nu het spel. Tot de volgende keer!")
