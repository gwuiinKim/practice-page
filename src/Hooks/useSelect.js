import { useState } from "react";

export default defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChange = value => {
    setValue(value);
  };
  return { value, setValue, onChange };
};
