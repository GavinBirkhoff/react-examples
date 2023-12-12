import { useState } from "react";

const Sub = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Sub;
