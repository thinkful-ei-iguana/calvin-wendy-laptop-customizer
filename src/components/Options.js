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
    // console.log(this.props.id);
    // console.log(this.props.features[0].name);
    return (
      <div className="summary__option" key={this.props.id}>
        <label className="labelOne" htmlFor={this.props.id}>
          {this.props.features[0].name}
          <input
            type="radio"
            id={this.props.id[0]}
            value={this.props.features}
            name={this.props.name}
          ></input>
        </label>
        <label className="labelTwo" htmlFor={this.props.id}>
          {this.props.features[1].name}
          <input
            type="radio"
            id={this.props.id[1]}
            value={this.props.features}
            name={this.props.name}
          ></input>
        </label>
      </div>
    );
  }
}

export default Options;
