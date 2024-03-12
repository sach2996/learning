//advance apis in typescript

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

//generic
type UpdatedProps = Pick<User, "name" | "age">;

type UpdatedPropsPartial = Partial<UpdatedProps>;

function sumOfAge(user1: UpdatedProps, user2: UpdatedProps) {
  return user1.age * user2.age;
}

const age = sumOfAge({ name: "John", age: 20 }, { name: "Johny", age: 21 });
console.log(age);

//readonly

interface Config {
  readonly endpoint: string;
  readonly apikey: string;
}

const config: Config = {
  endpoint: "test",
  apikey: "test",
};

//record

type Users = Record<string, { age: number; name: string }>;
const users: Users = {
  "123": { age: 20, name: "John" },
};

//map
const users1 = new Map<string, UpdatedProps>();
users1.set("1", { name: "John", age: 30 });
const user11 = users1.get("1");
console.log(users1);

//exclude

type EventType = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<EventType, "scroll">;
const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};
handleEvent("click");

console.log("Typescritp advanced apis");
