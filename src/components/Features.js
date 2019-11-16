import React from "react";
import Options from "./Options";
import slugify from "slugify";

class Features extends React.Component {
  // features = Object.keys(this.props.features).map((feature, idx) => {
  //   const featureHash = feature + "-" + idx;
  //   return this.features;
  // });

  render() {
    console.log(this.props.features);
    console.log(this.props.test);
    return (
      <form className="main__form">
        <fieldset className="feature" key={this.featureHash}>
          <legend className="feature__name">
            <h3>{this.props.test}</h3>
            <Options />
          </legend>
          <Options />
        </fieldset>
      </form>
    );
  }
}

export default Features;
