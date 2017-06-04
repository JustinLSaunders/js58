var Person = function(userInputName, userInputAge){
  this.name = userInputName;
  this.age = userInputAge;
  this.gender = "gender";
}

Person.prototype.canDrive = function(){
  // if(this.age >= 16){
  //   return(true);
  // } else {
  //   return(false);
  // }
  return this.age >= 16;
}

var user1 = new Person("Justin", "37");
console.log(user1.name + " is " + user1.age + " years old!");
console.log("Can they drive? " , user1.canDrive())