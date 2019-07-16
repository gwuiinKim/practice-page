import React, { Component } from "react";
import Select, { components } from "react-select";

const controlStyles = {
  borderRadius: "1px solid black",
  padding: "5px",
  color: "white"
};

const ControlComponent = props => (
  <div style={controlStyles}>
    {<p>Custom Control</p>}
    <components.Control {...props} />
  </div>
);

export default class CustomControl extends Component<*, State> {
  state = {};
  render() {
    return (
      <Select
        isClearable
        components={{ Control: ControlComponent }}
        isSearchable
        name="color"
      />
    );
  }
}
