// this is just an assignment

const cpp = "this_is_a_variable";
const java = "thisIsAVariable";

function conversionOfVariable(input) {
  const arr = input.split("");
  let result = "";
  let cppVariable = false;
  if (arr.some((val) => val === "_")) {
    cppVariable = true;
  }
  for (let i = 0; i < arr.length; i++) {
    if (cppVariable && arr[i] === "_") {
      i++;
      result = result + arr[i].toUpperCase();
    } else if (!cppVariable && arr[i].toUpperCase() === arr[i]) {
      result = result + "_" + arr[i].toLowerCase();
    } else {
      result = result + arr[i];
    }
  }
  return result;
}

console.log("cpp ", conversionOfVariable(cpp));
console.log("java ", conversionOfVariable(java));
