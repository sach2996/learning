import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, notifications } from "./store/atoms/count";
import { evenSelector } from "./count.selector";
function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  console.log("using re-render");
  return (
    <>
      <Notifications />
      <CountRenderer />
      <Buttons />
      <EvenOdd />
    </>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}
function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  console.log("button rerender");
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

function EvenOdd() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "It is even" : null}</div>;
}

function Notifications() {
  const [networkNotications, setNetworkNotications] =
    useRecoilState(notifications);
  return (
    <div>
      <button>My network ({networkNotications.network})</button>
      <button>Jobs ({networkNotications.jobs})</button>
      <button>Messaging ({networkNotications.messaging})</button>
      <button>Notifications ({networkNotications.notifications})</button>
    </div>
  );
}
export default App;
