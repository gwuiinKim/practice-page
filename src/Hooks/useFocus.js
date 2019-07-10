import { useState } from "react";

export default () => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState();
  const onClick = event => {
    const {
      target: { innerText }
    } = event;
    setValue(innerText);
    setFocus(!focus);
    console.log(focus);
    console.log(value);
  };
  return { value, setValue, focus, onClick };
};
