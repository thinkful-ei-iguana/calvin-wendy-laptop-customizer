import React from "react";
import Options from "./Options";

function Features() {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {this.props.features}
    </form>
  );
}

export default Features;
