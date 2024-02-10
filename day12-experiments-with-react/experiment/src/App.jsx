import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState([]);

  //useEffect is to define function and dependency array(if empty then it runs on component mount)
  //we can not use async function in useEffect
  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
        const jsonRes = await res.json();
        console.log("res", jsonRes.todos);
        setTodo(jsonRes.todos);
        console.log(todo);
      });
    }, 5000);
  }, []);
  return (
    <>
      {todo.map((val) => (
        <TodoComponent
          key={val.id}
          title={val.title}
          description={val.description}
        />
      ))}
    </>
  );
}

function TodoComponent({ title, description }) {
  console.log({ title });
  return (
    <>
      <h2>{title}</h2>
      <div>{description}</div>
    </>
  );
}
export default App;
