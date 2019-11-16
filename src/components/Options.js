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
    console.log(this.props.id);
    console.log(this.props.features[0].name);
    return (
      <div className="summary__option" key={this.props.id}>
        {/* <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">{this.selectedOption}</div> */}
        <label for={this.props.id}>
          {this.props.features[0]}
          <input
            type="text"
            id={this.props.id}
            value={this.props.features}
            name={this.props.id}
          ></input>
        </label>
      </div>
    );
  }
}

export default Options;
