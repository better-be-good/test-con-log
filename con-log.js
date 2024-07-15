const myAss = { name: 'Kristian' };
const time = new Date().getHours();
let greeting;
let day;
const numberOfPizzas = 99999;
const favoritePizzaIngredient = "garlic";
const partyMembers =[ {
    name: "Angela",
    comingToTheParty: true
},
    { name:"Mirela",
     comingToTheParty: true, },
    { name:
      "Maša", comingToTheParty: true},
    { name:
       "Kristian", comingToTheParty: false}

]
function printNotComing(partyMembers) {
    partyMembers.forEach(member => {
      if (!member.comingToTheParty) {
        console.log(`${member.name} is not coming to the party.`); //console.log(member.name);
      }
    });
  }
;

  
const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    glutenFree: true,
    size: 'large'
}
console.log(myAss);
console.log(myAss.name);
console.log(`number of pizzas ${numberOfPizzas}`);
console.log(`favorite pizza ingredient ${favoritePizzaIngredient}`);
console.log(`pizza size : ${pizza.size}`);
console.log(`pizza toppings : ${pizza.toppings[1]}`);
//console.log(` ${partyMembers}`);
printNotComing(partyMembers);



//function time{
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);


switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
  break;
}
console.log(`It is ${day} today.`);


let text;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text);


let tex;
switch (new Date().getDay()) {
  default:
    tex = "Looking forward to the Weekend heheh";
    break;
  case 4:
  case 5:
    tex = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    tex = "It is Weekend";
    break;
}
console.log(tex);


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let ext = "";
for (let i = 0; i < cars.length; i++) {
  ext += cars[i] + "\n";
}
console.log(ext);

let slovo = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "\n";
}
console.log(slovo);