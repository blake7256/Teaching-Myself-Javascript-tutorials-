//data types:

//number
//string
//array
//object

//variables can contain letters, numbers, underscores, dollar signs
//should begin with a letter
//_ $
//Case sensitive

//alert('File Linked!');
var number1 = 35;
var number2 = '40';
var test = 'This is a test';
var Test = 'This is another test';

//alert('My favorite number is '+number1);
//alert(test);

// camel case
var myNumber;

//partial case
var MyFavoriteNumber;
myFavoriteNumber = 5;

//underscore
var my_favorite_number;

//array ... first value is 0 (blue is 1)
var colors = ['red', 'blue', 'green'];

colors.push('purple');
//alert(colors[1]);

var numbers = [5, 4, 3, 2, 1];
numbers.reverse();
//alert(numbers[0] + numbers[2]);
//alert(numbers.sort());
//alert(numbers.reverse());

//loops\\  they iterate through something
for(var i = 0; i <= 10; i++){
    console.log('I love the number ' + i);
}

var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//for each loop, meant to work with arrays
numbers.forEach(function(number){
    console.log(number);
});

for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}


var var1 = 3;
var var2 = 4;

//conditionals
if(1 == 1){
    console.log('This is true');
}

if(1 == 2){
    console.log('This is false so it wont even show up in the console');
}

if(var1 != var2){
    console.log('!= means NOT true');
}


// || = or and && = and
if(var1 == var2 && var1 == 3){
    console.log('This is true');
} else {
    console.log('This is false');
}

//switch statements
var fruit = 'banana';


// default in switch statements are basically "else" in if statements
switch(fruit){
    case "banana":
        alert('i HATE bananas');
        break;
    case "apple":
        alert('apples are pretty good');
        break;
    case "orange":
        alert('i hate oranges too');
        break;
    default:
        alert('I love all other fruits');
        break;
}

var myFavoriteGames = ['Fallout: New Vegas', 'Red Dead Redemption', 'Persona 5'];

//object literal
var person = {
    firstName: 'Blake',
    lastName: 'Unnerstall',
    age: 23,
    game: myFavoriteGames,
    address: {
        street: '123 something st',
        city: 'St. Louis',
        state: 'Missouri'
    },
    fullName: function(){
        //"this" refers to the current object that its in
        return this.firstName + " " + this.lastName;
    }

}

console.log('my favorite game is probably ' + person.game[2]);
console.log('but ' + person.game[0] + ' and ' + person.game[1] + ' are really good too.');
console.log(person.address.street);
console.log(person.fullName());

//object constructor

var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function(){
    return 'An apple is the color ' + this.color + ' and is the shape ' + this.shape;
}

console.log(apple.describe());

//simpler way to do this... constructor pattern

function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return 'A ' + this.name + ' is the color '+ this.color+ ' and is the shape ' + this.shape;
    }
}

var apple = new Fruit('apple', 'red', 'round');
var melon = new Fruit('melon', 'green', 'round');
//console.log(apple);
console.log(melon.shape);
console.log(melon.describe());
console.log(apple.describe());

//arrays of objects
var users = [
    {
        name: 'John Doe',
        age: 30
    },
    {
        name: 'Mark Zuckerberg',
        age: 35
    },
    {
        name: 'Third Name',
        age: 27
    }
];

console.log(users[0].name);

//events
function doClick(){
    alert('You Clicked!');
}

function changeText(){
    var heading = document.getElementById('heading');
    heading.innerHTML = 'You Clicked :)))';
}

function showDate(){
    var time = document.getElementById('time');
    time.innerHTML = Date();
}

function clearDate(){
    var time = document.getElementById('time');
    time.innerHTML = ' ';
}

function changeBackground(x){
    console.log(x.value);
    var heading = document.getElementById('heading');
    heading.style.color = x.value;
}

function validateForm(){
    //var firstName = document.getElementById('firstName');
    var firstName = document.forms["myForm"]["firstName"].value;

    if(firstName == null || firstName == " "){
        alert("First Name field empty");
        return false;
    }

    if(firstName.length < 3){
        alert("First Name must be at least 3 characters");
        return false;
    }
}