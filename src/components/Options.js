import React from "react";
import "./Options.css";
class Options extends React.Component {
  updateFeature = (feature, newValue) => {
    // const featureHash = feature + "-" + idx;
    const selected = Object.assign({}, this.state.selected);
    const selectedOption = this.state.selected[feature];
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  optionChoice = () => {
    this.props.features.map(choice => choice);
  };
  render() {
    const name = this.props.name;
    const cost = this.props.cost;
    const nameKeyOne = this.props.name[0].replace(" ", "-");
    const nameKeyTwo = this.props.name[1].replace(" ", "-");
    return (
      <div className="summary__option" key={this.props.id}>
        {/* <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">{this.selectedOption}</div> */}
        {/* <label className="1" htmlFor={this.props.id}>
          {this.props.features} */}
        <input
          type="radio"
          id={`${this.props.title}1`}
          // value={this.props.features}
          name={this.props.title}
          value={`${this.props.title}1`}
        />
        <label htmlFor={`${this.props.title}1`}>
          {name[0]}, {cost[0]}
        </label>
        {/* </label> */}
        {/* <label className="2" htmlFor={this.props.id}>
          {this.props.features} */}
        <input
          type="radio"
          id={`${this.props.title}2`}
          // value={this.props.features}
          name={this.props.title}
          value={`${this.props.title}2`}
        />
        <label htmlFor={`${this.props.title}2`}>
          {name[1]}, {cost[1]}
        </label>
        {/* </label> */}
      </div>
    );
  }
}

export default Options;
