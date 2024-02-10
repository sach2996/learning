import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useMemo } from "react";
import { useCallback } from "react";
// import './App.css'

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos").then(async (res) => {
//       setTodos(res.data.todos);
//     });
//   }, []);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }
// function Todo({ title, description }) {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <h5>{description}</h5>
//     </div>
//   );
// }
// function App() {
//   const [todoId, setTodoId] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setTodoId(1)}>1</button>
//       <button onClick={() => setTodoId(2)}>2</button>
//       <button onClick={() => setTodoId(3)}>3</button>
//       <Todo id={todoId} />
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todos, setTodos] = useState({});
//   useEffect(() => {
//     axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`).then((res) => {
//       setTodos(res.data.todos[0]);
//     });
//   }, [id]);

//   return (
//     <div>
//       <h3>{todos.title}</h3>
//       <div>{todos.description}</div>
//     </div>
//   );
// }

//useMemoExample
// memoize the value across re-renders, only recaalculate it if inputVal changes
// function App() {
//   const [counter, setCounter] = useState(0);
//   const [sum, setSum] = useState(0);
//   const [inputValue, setInputValue] = useState(0);

//   // useEffect(() => {
//   //   let count = 0;
//   //   for (let i = 1; i <= inputValue; i++) {
//   //     count = count + i;
//   //   }
//   //   setSum(count);
//   // }, [inputValue]);

//   let finalCount = useMemo(() => {
//     let count = 0;
//     for (let i = 1; i <= inputValue; i++) {
//       count = count + i;
//     }
//     return count;
//   }, [inputValue]);

//   return (
//     <div>
//       <input
//         placeholder="enter a number"
//         type="text"
//         onChange={(e) => {
//           setInputValue(e.target.value);
//           // calculateSum();
//         }}
//       ></input>
//       <div>Sum is {finalCount}</div>
//       <button onClick={() => setCounter(counter + 1)}>
//         Counter ({counter})
//       </button>
//     </div>
//   );
// }

//useCallback
// it is user to memoize functions which does referential comparison
function App() {
  const [counter, setCounter] = useState(0);
  var a = useCallback(() => {
    console.log("test");
  }, []);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter}) //{" "}
      </button>
      <Demo a={a} />
    </div>
  );
}

const Demo = memo(function ({ a }) {
  console.log("rerender");
  return <div>hi</div>;
});
export default App;
