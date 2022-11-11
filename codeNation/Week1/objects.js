//  const person = {
//      firstName: "Sally",
//      lastName: "Evans",
//      age: 27,
//      occupation: "Sales Assistant",
//      married: false,
//      homeOwner: false,
//      hobbies: ["tennis", "gardening", "bungee jumping"],
//      marketingOp () {
//         if (this.homeOwner == false && this.age > 25){
//          return "Send mortgage offer email."   
//         }else if(this.homeOwner == false && this.age < 25){
//             return "Send summer holiday fun credit card offer."
//         }else if(this.homeOwner == true && this.age > 25) {
//             return "Pension investment offer."
//         } else {
//             return "Send sensible Savings offer."
//         }

//         }
//      }
    
    



// if(day === "Saturday" || day === "Sunday") {
//     console.log(`Great it's ${day}, let's play ${person.hobbies[1]}`)
// } else {
//     console.log(`Oh no! It's ${day}, I hate being a ${person.occupation}!`)
// }

const pet = {
    petName: "Buster",
    typeOfPet: "Lab Retriever",
    age: 9,
    colour: "Golden boy",
    petFeatures: ["dramatic", "stupid", "loyal", "goofy"],
    eat: true,
    drink: true,
    consuming () {
        if (this.eat == true && this.drink == true) {
            return `${this.petName} is eating and drinking!`
        } else if (this.eat == true) {
            return `${this.petName} is eating!`
        }else if (this.drink == true) {
            return `${this.petName} is drinking!`
        } else {
            return `${this.petName} isn't hungry or thirsty right now.`
        }
    }
}
console.log(pet.consuming())
//console.log(`This is ${pet.petName}, he is a ${pet.typeOfPet}. He is ${pet.age} years old, and is a ${pet.colour}.`);
pet.age = 10;
//console.log(pet);