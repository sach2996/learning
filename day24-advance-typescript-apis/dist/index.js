"use strict";
function sumOfAge(user1, user2) {
    return user1.age * user2.age;
}
const age = sumOfAge({ name: "John", age: 20 }, { name: "Johny", age: 21 });
console.log(age);
const config = {
    endpoint: "test",
    apikey: "test",
};
const users = {
    "123": { age: 20, name: "John" },
};
//map
const users1 = new Map();
users1.set("1", { name: "John", age: 30 });
const user11 = users1.get("1");
console.log(users1);
const handleEvent = (event) => {
    console.log(`Handling event: ${event}`);
};
handleEvent("click");
