import React from "react";
import Features from "./Features";
import Options from "./Options";
import Total from "./Total";

function Cart() {
  return (
    <div>
      <Features />
      <Options />
      <Total total={sum} />
    </div>
  );
}

export default Cart;
