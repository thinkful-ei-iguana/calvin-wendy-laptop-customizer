import React from "react";
import Options from "./Options";
import slugify from "slugify";

class Features extends React.Component {
  // features = Object.keys(this.props.features).map((feature, idx) => {
  //   const featureHash = feature + "-" + idx;
  //   return this.features;
  // });

  render() {
    const processor = this.props.features.Processor;
    const OS = this.props.features["Operating System"];
    const VC = this.props.features["Video Card"];
    const Display = this.props.features.Display;

    console.log(this.props.features);
    console.log(this.props.test);
    return (
      <form className="main__form">
        <fieldset className="feature" key={this.featureHash}>
          <legend className="feature__name">
            <h3>{this.props.test}</h3>
            <Options
              title="processor"
              name={[processor[0].name, processor[1].name]}
              cost={[processor[0].cost, processor[1].cost]}
            />
            <Options
              title="OperSys"
              name={[OS[0].name, OS[1].name]}
              cost={[OS[0].cost, OS[1].cost]}
            />
            <Options
              title="VideoCard"
              name={[VC[0].name, VC[1].name]}
              cost={[VC[0].cost, VC[1].cost]}
            />
            <Options
              title="Disp"
              name={[Display[0].name, Display[1].name]}
              cost={[Display[0].cost, Display[1].cost]}
            />
          </legend>
        </fieldset>
      </form>
    );
  }
}

export default Features;
