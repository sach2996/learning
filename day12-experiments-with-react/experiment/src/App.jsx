import { useState } from "react";
function App() {
  return (
    <>
      <HeaderWithButton />
      <Header title="name" />
    </>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("test");
  function onClickHandler() {
    setTitle(Math.random);
  }
  return (
    <>
      <button onClick={onClickHandler}>Generate new title </button>
      <Header title={title} />
    </>
  );
}

function Header(props) {
  return <div>My name is {props.title}</div>;
}
export default App;
