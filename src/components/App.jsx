import React from "react";
import Heading from "./Heading";
import List, { anotherList } from "./List";

function App() {
  return (
    <div>
      <Heading />
      <List />
      {anotherList()}
    </div>
  );
}

export default App;
