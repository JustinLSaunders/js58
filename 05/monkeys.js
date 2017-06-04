var Monkey = function(name, species, foodsEaten){
  this.name = name;
  this.species = species;
  this.foodsEaten = foodsEaten;
}

Monkey.prototype.eatSomething = function(food){
  this.food = this.foodsEaten + ", " + food;
  console.log(this.name + " just ate a " + food + ".");

}

Monkey.prototype.introduce = function(){
  console.log('Hi, my name is ' + this.name + ". " + "I'm a " + this.species + ". I like to eat " + this.food + ".");
}

var monkey1 = new Monkey("Glen", "beast", "candy"); monkey1.eatSomething("baby"); monkey1.introduce();
var monkey2 = new Monkey("Justin", "weirdo", "mangos"); monkey2.eatSomething("mom"); monkey2.introduce();
var monkey3 = new Monkey("Brian", "boss", "hope"); monkey3.eatSomething("dad"); monkey3.introduce();