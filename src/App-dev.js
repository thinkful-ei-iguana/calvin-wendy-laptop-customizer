import React from "react";
import Features from "./components/Features";
import "./App-dev.css";
import Options from "./components/Options";
import slugify from "slugify";
import Cart from "./components/Cart";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

class AppDev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200
        },
        "Video Card": {
          name: "Toyota Brown Corolla 1.5v",
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  testFn = Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
  });
  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <div>
            <h2>Hi I'm the cost</h2>
          </div>
          <Features
            updateFeature={this.updateFeature}
            features={this.props.features}
            test={() => this.testFn}
          />
        </main>
      </div>
    );
  }
}
export default AppDev;
