"use strict";
const x = 101;
console.log(x);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction.Up) {
    }
}
doSomething(Direction.Up);
//generics
function identity(args) {
    return args;
}
let output = identity("mystring");
let output2 = identity(19);
