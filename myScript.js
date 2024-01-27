// 1-  function declaration vs expression

//function declaration 

// walk();
function walk() {
    console.log("walk");
}

//function expression -> Anonymous
// run();
let run = function() {
    console.log("run");
}

// 2- Hoisting - Hoisting is a process of moving function declaration at the top of the file and it is done by JS engine automatically.

// 3- Arguments 

// function sum() {
//     let total = 0;
//     for(let value of arguments){
//         total +=  value
//     }
//     return total;
// }

// console.log(sum(1,2,3,4,5));

// 4- Rest Operator
function sum(discount, ...prices) {
    console.log(prices);
    const total = prices.reduce((a, b) => a  +  b); 
    // return total * (1 - discount);
    return total;
}

// console.log(sum(0.1, "20","30"));

// 5- Default parameters
function interest(principal, rate=3.5, years){
    return principal *  rate / 100 * years;
}

// console.log(interest(10000, undefined, 5));

// 6- Getters and Setters with try catch block
const person = {
    firstName: "Ninad",
    lastName: "Samant",
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){

        if(typeof value !== "string"){
            throw new Error("value is not a string");
        }
        

        const parts = value.split(" ");

        if(parts.length !== 2){
            throw new Error("Enter firstName and lastName");
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    person.fullName = "Ninad Samant";
}catch(e){
    alert(e);
}

// console.log(person);

// 8 - Local and Global scope

const color = "red";

// function start(){
//     const message = "hi";
//     // const color = "blue";
//     console.log(color)
// }

function stop(){
    const message = "bye";
}

// start();

//9- Let vs Var

// var -> function-scoped
// ES6 -> let && const => block-scoped

function start(){
    for(var i=0; i<5; i++){
        if(true){
            var color = "red";
        }
    }

    console.log(color);
}

// start();

// 10- The this keyword

// what is this => `this` references to the object that is executing current function.

// method -> obj

const video = {
    title: "a",
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
};

// video.stop();

function playVideo() {
    console.log(this);
}

// playVideo();


// Exercise 1- Sum of Arguments

function sum(...items){

    if(items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];

    return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));

//Exercise 2- Area of circle

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

//Exercise 3- Error Handling

try{
    const numbers = 1;
    const count = countOccurences(numbers, 1);
    console.log(count);
}catch(e){
    console.log(e);
}

function countOccurences(array, searchElement) {

    if(!Array.isArray(array)){
        throw new Error("Invalid Array");
    }

    return array.reduce((acc, curr) => {
        const occurence = (curr === searchElement) ? 1 : 0;
        return acc + occurence;
    })
}