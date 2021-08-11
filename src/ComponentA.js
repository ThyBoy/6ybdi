import { useEffect } from "react";

export default function ComponentA({ dispatch }) {
  //console.log('A')
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch[0]({ type: "increment" });
      dispatch[1]({ type: "increment" });
      dispatch[2]({ type: "increment" });
      dispatch[3]({ type: "increment" });
    }, 1);
    return () => {
      clearInterval(timer);
    };
  });

  return <h2>ComponentA</h2>;
}
