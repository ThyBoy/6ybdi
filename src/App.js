import "./styles.css";
import { useReducer } from "react";
import ComponentB from "./ComponentB";
import ComponentA from "./ComponentA";

const initialCount = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      throw new Error();
  }
}

export default function App() {
  //console.log('parent')

  const [countA, dispatchA] = useReducer(reducer, initialCount);
  const [countB, dispatchB] = useReducer(reducer, initialCount);
  const [countC, dispatchC] = useReducer(reducer, initialCount);
  const [countD, dispatchD] = useReducer(reducer, initialCount);

  return (
    <>
      <ComponentA dispatch={[dispatchA, dispatchB, dispatchC, dispatchD]} />
      <ComponentB count={countA} />
      <ComponentB count={countB} />
      <ComponentB count={countC} />
      <ComponentB count={countD} />
    </>
  );
}
