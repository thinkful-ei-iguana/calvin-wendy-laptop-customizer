import React from "react";
import Features from "./Features";
import Options from "./Options";
import Total from "./Total";

function Cart() {
  const sum = `currentCartOptionOne + currentCartOptionTwo + currentCartOptionThree + currentCartOptionFour`;
  return (
    <div>
      <Features
        currentCartOptionOne={this.props.name + this.props.cost}
        currentCartOptionTwo={this.props.name + this.props.cost}
        currentCartOptionThree={this.props.name + this.props.cost}
        currentCartOptionFour={this.props.name + this.props.cost}
      />
      <Options />
      <Total total={sum} />
    </div>
  );
}

export default Cart;
