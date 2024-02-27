const x: number = 101;
console.log(x);

enum Direction {
  Up,
  Down,
  Left,
  Right,
}
function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.Up) {
  }
}

doSomething(Direction.Up);

//generics
function identity<T>(args: T): T {
  return args;
}

let output = identity<string>("mystring");
let output2 = identity<number>(19);
