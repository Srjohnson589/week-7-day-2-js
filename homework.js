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
//     if dict - 
//          first print the key, dash, line break
            if string inside, print string, continue to next key
            if list,
                return recurse
//     if list -
            if string, print
            othwise,
                return recurse
//     if str - print, go to next item
*/

console.log(typeof(person3.shakes))

const myParsing = (dataobj) => {
    switch(typeof(dataobj)=="string") {
        case true:
            console.log(dataobj)
            break;
        default:
            switch(typeof dataobj === 'object' && !Array.isArray(dataobj)) {
                case true:
                    for (let key in dataobj) {
                        console.log(`${key} -\n`);
                        switch(typeof(dataobj.key)) {
                            case "string":
                                console.log(`\t${dataobj.key}\n`);
                                continue;
                            default:
                                return myParsing(dataobj[key]);
                            }
                    }
                default:
                    for (let item of dataobj) {
                        switch(typeof(item)) {
                            case "string":
                                console.log(`\t${item}\n`);
                                break;
                            default:
                                console.log(`${item}`);
                                return myParsing(item);
                }
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

//1.


// 2