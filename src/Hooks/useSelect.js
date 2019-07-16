import { useState } from "react";

export default (defaultValue, addToFilterFunc) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = value => {
    setValue(value);
    addToFilterFunc(`만기예정(${value.label})`);
  };
  return { value, setValue, onChange };
};
