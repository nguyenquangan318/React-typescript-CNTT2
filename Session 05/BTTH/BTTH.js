var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    Animal.prototype.speak = function () {
        console.log("Phát ra âm thanh");
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.getAge = function () {
        return this.age;
    };
    Animal.prototype.setAge = function (age) {
        this.age = age;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, species, breed) {
        var _this = _super.call(this, name, age, species) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.speak = function () {
        console.log("Woof!!");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, species, breed) {
        var _this = _super.call(this, name, age, species) || this;
        _this.breed = breed;
        return _this;
    }
    Cat.prototype.speak = function () {
        console.log("Meow!!");
    };
    return Cat;
}(Animal));
var Rabbit = /** @class */ (function (_super) {
    __extends(Rabbit, _super);
    function Rabbit(name, age, species, breed) {
        var _this = _super.call(this, name, age, species) || this;
        _this.breed = breed;
        return _this;
    }
    Rabbit.prototype.speak = function () {
        console.log("Squeak!!");
    };
    return Rabbit;
}(Animal));
var randomAnimal = new Animal("animal", 10, "Mamal");
console.log(randomAnimal.getName());
console.log(randomAnimal.getAge());
console.log(randomAnimal.species);
randomAnimal.speak();
var dog = new Dog("John", 20, "Mamal", "pug");
console.log(dog.getName());
console.log(dog.getAge());
console.log(dog.species);
console.log(dog.breed);
console.log(dog.speak());
