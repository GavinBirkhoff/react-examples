import { useEffect, useRef, useState } from "react";

const Sub = () => {
  // debugger
  const [count, setCount] = useState(1);
  const handleClick = () => {
    // debugger
    setCount(count + 1);
  };
  useEffect(()=>{
    debugger
  },[])
  useEffect(()=>{
    debugger
  },[count])
  return <section onClick={handleClick}>sub-count:{count}</section>;
};

export default Sub;
