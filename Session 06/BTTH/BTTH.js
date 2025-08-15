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
//Xay dung lop truu truong Animal
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.sound = function () {
        return "Sound";
    };
    Animal.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", age: ").concat(this.age, ", category: ").concat(this.category);
    };
    Animal.prototype.feed = function () {
        return "Feed";
    };
    return Animal;
}());
//Xay dung cac lop con
var Mamal = /** @class */ (function (_super) {
    __extends(Mamal, _super);
    function Mamal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mamal.prototype.move = function () {
        return "Chay";
    };
    return Mamal;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.move = function () {
        return "Bay";
    };
    return Bird;
}(Animal));
var Reptile = /** @class */ (function (_super) {
    __extends(Reptile, _super);
    function Reptile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Reptile.prototype.move = function () {
        return "Bo";
    };
    return Reptile;
}(Animal));
var Zookeeper = /** @class */ (function () {
    function Zookeeper() {
    }
    Zookeeper.prototype.careForAnimal = function (animal) {
        console.log("Care for ".concat(animal.name));
    };
    Zookeeper.prototype.report = function (animal) {
        console.log("Report for ".concat(animal.name));
    };
    return Zookeeper;
}());
