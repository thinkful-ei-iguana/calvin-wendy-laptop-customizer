import React from "react";
import Features from "./components/Features";
import "./App-dev.css";
import Options from "./components/Options";
import slugify from "slugify";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

class AppDev extends React.Component {
  constructor() {
    super();
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
          name: "Toyota Corolla 1.5v",
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <Features
          updateFeature={this.updateFeature}
          features={this.props.features}
        />
        {/* <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
            </div>
          </section>
        </main> */}
      </div>
    );
  }
}
//

//
//   );
// });

// total = Object.keys(this.state.selected).reduce(
//   (acc, curr) => acc + this.state.selected[curr].cost,
//   0
// );

//   }
// }

export default AppDev;
