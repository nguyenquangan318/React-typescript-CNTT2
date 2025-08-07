"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//type anotation
let number = 10;
number = 20;
let string = '1';
let bool = true;
//type inference
let result;
//enum
var weekDay;
(function (weekDay) {
    weekDay[weekDay["monday"] = 0] = "monday";
    weekDay[weekDay["tuesday"] = 1] = "tuesday";
})(weekDay || (weekDay = {}));
//array
let numbers = [1, 2, 3, 4, 5];
//object
let student = { id: 1 };
student.id = 1;
student.name = "An";
//# sourceMappingURL=type.js.map