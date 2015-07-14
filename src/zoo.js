// do not remove this line...you're going to need it for your addAnimal method
var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = 'closed'
  this.animals = [];
}

Zoo.prototype.changeLocation = function(newLocation){
  this.location = newLocation
  return this.location
};


Zoo.prototype.open = function(){
  this.status = 'open'
  return this.status
}

Zoo.prototype.isOpen = function(){
  if(this.status === 'open'){
    return this.status
  }
  else{
    return this.status
  }
}

Zoo.prototype.addAnimal = function (animal){
  if(animal instanceof Animal){
    if(this.status === 'open'){
      this.animals.push(animal)
      if(this.animals != null)
        return true
        this.animals.pop()
        return this.animals.length
      } else if (this.status ==='closed') {
        return false
      }
  } else {
  return "Not an Animal"
    }
}


module.exports=Zoo;
