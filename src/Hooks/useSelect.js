import { useState } from "react";

export default (defaultValue, func) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = value => {
    setValue(value);
    if (func) {
      func(`만기예정(${value.label})`);
    }
  };
  return { value, setValue, onChange };
};
