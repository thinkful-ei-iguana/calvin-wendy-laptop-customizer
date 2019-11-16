import React from "react";
import Options from "./Options";
import slugify from "slugify";

function Features(props) {
  const createFeature = (feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = [];
    let features = props.features[feature];
    console.log(features);
    for (let key in features) {
      let item = features[key];
      const itemHash = slugify(JSON.stringify(item));
      options.push(
        <div key={itemHash} className="feature__item">
          <Options
            key={idx}
            id={idx}
            features={features}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === features.name}
          />
        </div>
        // onChange={e => this.props.updateFeature(feature, item)}
      );
    }
    return (
      <form className="main__form">
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h2>{feature}</h2>
            {options}
          </legend>
        </fieldset>
      </form>
    );
  };

  const features = Object.keys(props.features).map(createFeature);
  return <div>{features}</div>;
}

export default Features;
