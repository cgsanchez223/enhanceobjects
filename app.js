// Same keys and values
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

// Redo of createInstructor
function instructorCreate(firstName, lastName){
    return {
        firstName,
        lastName
    }
}
console.log(instructorCreate('Jonathan', 'Capace')); // {firstName: 'Jonathan', lastName: 'Capace'}

// Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"


// Computed Property Names ES2015

const numberFavorite = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
};
console.log(numberFavorite); // {42: 'That is my favorite!', firstName: 'Colt'}



// Object Methods
var instructor2 = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
};


// Object Methods ES2015
const newInstructor = {
    firstName : "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
};
console.log(newInstructor.sayHi()); // Hi!
console.log(newInstructor.sayBye('Colt')); // Colt says bye!




// createAnimal
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"


// function createAnimal
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb] (){
            return noise;
        }
    };
}
console.log(createAnimal('dog', 'bark', 'Woooof!')); // {species: 'dog', bark: ƒ}

const f = createAnimal("frog", "croak", "ribbit");
console.log(f.croak()); // ribbit