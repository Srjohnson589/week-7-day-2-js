//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

/*
Output I want:
    pizza - 
        Deep Dish
        South Side Thin Crust
    tacos -
        Anything not from Taco bell
    burgers -
        Portillos Burgers
    ice_cream -
        Chocolate
        Vanilla
        Oreo
    shakes -
        oberwise - Chocolate
        dunkin - Vanilla
        culvers - All of them
        mcDonalds - Sham-rock-shake
        cupids_candies - Chocolate Malt


//     switch(check datatype of thing going into)
        recurse until base case of string - to print
//     if dict - 
            if its a dict inside a dict, tab over
//          first print the key, dash, line break
            recurse for insides
//     if list -
            recurse for each item

        I did not get it to work exactly as I wanted above. The dict inside the dict threw me. However,
        I think it looks ok.
*/

console.log(typeof(person3.shakes))

const myParsing = (dataobj) => {
    switch(typeof(dataobj)=="string") {
        case true:
            return console.log(`\t${dataobj}\n`)
        default:
            switch(typeof(dataobj) === 'object' && !Array.isArray(dataobj)) {
                case true:
                    for (let key in dataobj) {
                        console.log(`${key} -\n`);
                        myParsing(dataobj[key]);
                        }
                default:
                    for (item of dataobj) {
                        myParsing(item);
                }
                }
            }
        }
        

console.log(myParsing(person3))

// Array.isArray citation **Googled how to distinguish between an object(dictionary) and object(array) in js

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person{

    constructor(name, age){
      this.name = name;
      this.age = age;
    }
  
    printInfo = () => {
        return console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
    
    birthday = () => {
        return this.age += 1;
    }
  }

christian = new Person('Christian', 197);
dylan = new Person('dYlan', 101);

christian.printInfo()
dylan.printInfo()

christian.birthday()
christian.birthday()
christian.birthday()
christian.printInfo()


// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const ergastData = async () => {
    try{
      const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
      const data = await response.json()
      console.log(data)
    } catch(error) {
      console.error(`there was an error ${error}`)
    }
  }
  
  ergastData()


// Codewars

//1. Vowel Count
function getCount(str) {
  let count = 0;
  const array = Array.from(str);
  for (i of str) {
    if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
      count++;
    }
    }
  return count;
  }


// 2. Disemvowel Trolls
function disemvowel(str) {
  let disemvoweled = '';
  for (i of str) {
    n = i.toLowerCase()
    if (n != 'a' && n != 'e' && n != 'i' && n != 'o' && n != 'u') {
      disemvoweled += i;
    }
  }
  return disemvoweled;
}







