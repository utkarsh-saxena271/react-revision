import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [list, setList] = useState([
    "do shit",
    "do dumbshit"
  ])

  return (
    <>
      <Create/>
      <Read list = {list} setList={setList}/>
    </>
  );
};

export default App;
