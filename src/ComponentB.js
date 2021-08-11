import { memo } from "react";

function ComponentB({ count }) {
  //console.log("B");
  return (
    <>
      <h3>Count: {count}</h3>
    </>
  );
}

export default memo(ComponentB);
