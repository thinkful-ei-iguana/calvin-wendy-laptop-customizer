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
    return (
      <div className="summary__option" key={this.props.id}>
        {/* <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">{this.selectedOption}</div> */}
        <label className="1" htmlFor={this.props.id}>
          {this.props.features}
          <input
            type="radio"
            id={this.props.id}
            value={this.props.features}
            name={this.props.name}
          ></input>
        </label>
        <label className="2" htmlFor={this.props.id}>
          {this.props.features}
          <input
            type="radio"
            id={this.props.id}
            value={this.props.features}
            name={this.props.name}
          ></input>
        </label>
      </div>
    );
  }
}

export default Options;
