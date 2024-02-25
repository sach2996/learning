// import './App.css'

import { useState, Component, useEffect } from "react";
import axios from "axios";

//custom hook
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
    return () => {
      clearInterval(value);
    };
  }, [n]);

  return { todos, loading };
}

function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [value]);
  return debouncedValue;
}
function App() {
  // const { todos, loading } = useTodos(5);

  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500);

  // if (loading) {
  //   return <div>Loading ...</div>;
  // }
  return (
    <>
      Debounced value {debouncedValue}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      {/* {todos.map((todo) => (
        <Track todo={todo} />
      ))} */}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

function MyComponent() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

class ClassBasedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default App;
