var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js'),
animal,
zoo;

describe('Zoo', function(){

  beforeEach(function(){
    // create a new zoo object each time
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      expect(zoo.changeLocation('Brooklyn')).toEqual('Brooklyn')
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      expect(zoo.open()).toEqual('open')
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open()
      expect(zoo.isOpen()).toEqual('open')
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toEqual('closed')
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([])
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.open()
      expect(zoo.addAnimal(lion)).toEqual(true)
    });
    it('should add an animal to the animals array', function(){
      zoo.open()
      zoo.addAnimal(lion);
      expect(zoo.animals.length).toEqual(1)
    });

    it('should only add instances of animals', function(){
      zoo.open()
      expect(zoo.addAnimal(zoo)).toEqual('Not an Animal');
    });

    it('should not add duplicates', function(){
      zoo.open()
      zoo.addAnimal(lion)
      expect(zoo.addAnimal(lion)).toEqual('You already have one')
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open()
      zoo.addAnimal(lion)
      expect(zoo.animals.length).toEqual(0)
    });
  });
});
