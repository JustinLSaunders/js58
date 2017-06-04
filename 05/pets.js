var dog0 = { name: "Burt", breed: "Huskey", color: "silver" };
var dog1 = { name: "Shelby", breed: "Pomeranian", color: "brown" };
var dog2 = { name: "Dallas", breed: "Elephant", color: "grey" };
var cat0 = { name: "Howie", breed: "a fucking cat", color: "mottled"}


// console.log(dog0.name, dog0.breed);
// console.log(dog1.name, dog1.breed);
// console.log(dog2.name, dog2.breed);

function proclaimPet(pet) {
  console.log(pet.name, pet.breed);
}

proclaimPet(dog0);
proclaimPet(dog1);
proclaimPet(dog2);
proclaimPet(cat0);