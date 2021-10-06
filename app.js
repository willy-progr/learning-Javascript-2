//increment button
let myTotalCount = document.getElementById("totalCount");
console.log(myTotalCount);
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById('save-el');
let count = 0;

function increment() {
     count += 1;
     countEl.innerText = count;
}
// increment();



// STRINGS

let userName ="Ben";
let message = 'You have a new notification';
let messageToUser = userName +" " + message;
console.log(messageToUser);
// console.log(userName + " " + message );

let name1 = 'willie';
let greeting = 'Hi my name is ';
let greetingMessage = greeting  + name1;
console.log(greetingMessage);


function save() {
    let myEntries = count + "-";
    saveEl.textContent +=  myEntries;
    console.log(count);
    countEl.textContent = 0;
    count =0;

}

//revision concepts

let firstName = "wilfred ";
let secondName = "kivinda";
let fullName = firstName + secondName;
console.log(fullName);

let name2 = 'Frenda';
let message = 'Hi there '
function greeting() {
    let greetingMessage = "Hi there" + ", " + name2  + '!';
    console.log(greetingMessage);
}
greeting();


let myPoints = 3;
function add3Points() {
    myPoints += 3;

}
add3Points();
add3Points();
add3Points();

function remove1Point() {
    myPoints -= 1
}
remove1Point();
remove1Point();
console.log(myPoints);

let errorMessage =document.getElementById("error");
function myError() {
    errorMessage.textContent = "Oops! something went wrong please try again later ."
}

//simple calculator
 let num1 = 8;
 let num2 = 2;
 document.getElementById('num1-el').textContent = num1;
 document.getElementById('num2-el').textContent = num2;
let sumEl = document.getElementById('sum-el');
 function add() {
     let addResult = num1 + num2;
     sumEl.textContent = "Sum: " + addResult
 }

 function minus() {
    let minusResult = num1 - num2;
    sumEl.textContent = "Sum: " +minusResult
}
function multiply() {
    let multiplyResult = num1 * num2;
    sumEl.textContent ="Sum: " + multiplyResult
}
function division() {
    let divideResult = num1 / num2;
    sumEl.textContent = "Sum: " + divideResult
}

//CHALLENGE 2
let playerDetails = {
    Name : 'Philip',
    chips : 2389
}

let cardsArray = [
    firstCard=  getRandomCard(),
    secondCard =  getRandomCard()
]
let sum = cardsArray[0] + cardsArray[1];
let hasBlackJack = false;
let isAlive = true;
let message = ""
let cards = [firstCard, secondCard]
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let myCards = document.getElementById("cards-el");
let player = document.getElementById('player-el');
player.textContent = playerDetails.Name + " " + playerDetails.chips;

function getRandomCard() {
     let myRandom =  Math.floor(Math.random()*13) +1 ;
     if (myRandom > 10) {
         return 10;
     } else if (myRandom === 1) {
         return 11;
     } else {
         return myRandom;
     }
}


function renderGame() {
    myCards.textContent = 'CARDS: ' + cards[0] + " & " + cards[1] // rendering out firstcard and lastcard
    //rendering all cards
    myCards.textContent = 'CARDS: ' 
    for (let index = 0; index < cards.length; index++) {
        myCards.textContent += cards[index] + ' ';
    }
    sumEl.textContent = 'SUM: ' + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card ?"
     } else if (sum === 21) {
         message = "You've Got a BlackJack!"
         hasBlackJack = true;
     }else {
        message = 'You are out of the game '
        isAlive = false;
     }
     messageEl.textContent = message;
}
 
 function startGame() {
     renderGame()
 }

function newCard() {
    messageEl.textContent = "Drawing new card";
    let newCard =  getRandomCard();
    sum += newCard;
    cardsArray.push(newCard)
    console.log(cardsArray);
    renderGame();
}

let number1 = Math.floor(Math.random()*6) + 1;
console.log(number1);


function  rollDice() {
    let x = Math.floor(Math.random()* 6 ) + 1;
    return x;
}
console.log(rollDice());


//LOGICAL OPERATORS

let hasSolvedChallenge = false;
let hasHints = false;
 
if (hasSolvedChallenge === fasle && hasHints === fasle) {
    return myFunction();
}

function myFunction () {
    console.log('Show the solution');
}


//OBJECTS
let myDetails = {
    name :'willie',
    age : 23,
    country : "Kenya"
}

function myDetailsFunction() {
    let logDetails = myDetails.name + ' is ' + myDetails.age + ' years old, from ' + myDetails.country;
    return logDetails;
}
console.log(myDetailsFunction());


let age = 22 ;
if (age < 6 ){
    console.log('free');
} else if (age > 6 && age < 17 ) {
    console.log('child discount');
} else if (age > 18 && age < 26) {
    console.log('student discount');
} else if (age > 26 && age < 66) {
    console.log('full discount');
} else{
    console.log('senior citizen discount');
}

console.log('The Five Largest Countries in the world are: ');
let largeCountries = ['tuvalu', 'China', 'Pakistan', 'Indonesia', 'kenya'];

largeCountries.pop(); // pop removes the last item in the array
largeCountries.push('nigeria');// pushes a new item at the end to the arrary
largeCountries.shift();//removes the first element at the start of the arrary
largeCountries.unshift('USA') // at the strart of the arrary

for (let i = 0; i < largeCountries.length; i++) {
    console.log('- ' + largeCountries[i]);
    
}


let dayOfMonth = 13;
let weekDay = 'friday';

if (dayOfMonth === 13 && weekDay == 'friday') {
    console.log('Noooooooooo');
}


let hands = ['rock', 'paper ', 'scissors']
function myGame() {
  let randomIndex = Math.floor( Math.random()*3)

  return hands[randomIndex];
}
console.log(myGame());
innerHTML
const myBox1 = document.getElementById('container2');
myBox1.innerHTML = "<button class= 'btn btn-success' onclick = 'buy()'>BUY!</button>";

const myParagraph = document.getElementById('myP');

function buy() {
    myBox1.innerHTML += "<h2 class = 'text-success mt-3'>Your Order Has Been Placed!</h2>"
}

let myBox = document.getElementById('box');
myBox.addEventListener('click', function (){
    return document.getElementById('box').textContent = 'boxed opened'
})

function saveBtn() {
    alert('Saved');
}

let myLeads = []
myLeads = JSON.parse(myLeads)

myLeads.push('www.google.com');

myLeads = JSON.stringify(myLeads);


console.log(myLeads);


console.log(myLeads);
const inputEl = document.getElementById('input-el');
let inputBtn = document.getElementById('input-btn');
const myLIst = document.getElementById('ul-l');

LOCALSTORAGE
localStorage.setItem('myLeads', "https://github.com/scrimba/learn-javascript/tree/main/5.%20Build%20a%20Chrome%20Extension")
console.log(localStorage.getItem("myLeads"));

localStorage.setItem("myleads1", "www.google.com");
localStorage.clear("myleads2");

console.log(localStorage.getItem("myleads1"));

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value);
    inputEl.value = " ";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads();
})


function renderLeads() {
let listItems = "";
for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li class = 'mt-2'> <a href = '' target = '_blank'> "+ myLeads[i] +"</a></li>" ;

    listItems += `<li class = 'mt-2'> <a href = 'https://fonts.google.com/' target = '_blank'>  ${ myLeads[i]} </a></li> `

}
myLIst.innerHTML = listItems 
}


const recepient = 'Hannah';
const sender = 'willie'
let email =  `Hello ${recepient}, how are doing? cheers up! from ${sender}`;
console.log(email);


console.log( Boolean(""));
console.log( Boolean("0"));
console.log( Boolean(null));
console.log( Boolean([0]));
console.log( Boolean("100"));

console.log( Boolean("-0"));
