import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import AddToCart from "./components/AddToCart";


const App = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <Header count={count} />
      <div style={{display:"flex",flexDirection:"column"}}>
        <Main />
        <AddToCart setcount={setcount} />
      </div>
    </div>
  );
};

export default App;
