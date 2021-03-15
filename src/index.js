const Animal = function ({ name, energy }) {
    this.name = name;
    this.energy = energy;
};

Animal.prototype.eat = function (energy) {
    this.energy += energy;
};

const catObject = { name: 'Cat', energy: 7 };

console.log(catObject);

const cat = new Animal(catObject);

console.log(cat);

cat.eat(5);

console.log(cat);
