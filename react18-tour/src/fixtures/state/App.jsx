import { useState } from "react";
import ClassCom from "./ClassCom";
import FuncCom from "./FuncCom";
import UseState from "./UseState";

const State = () => {
  const [id, setId] = useState(1);
  return (
    <>
      <h2>Update All</h2>
      <button onClick={() => setId(id + 1)}>id:{id} </button>
      <h3>FuncCom</h3>
      <FuncCom />
      <h3>ClassCom</h3>
      <ClassCom />
      <h3>UseState</h3>
      <UseState />
    </>
  );
};

export default State;
