import { useState } from "react";

export default () => {
    const [clicked, setClicked] = useState(false);
    const onClick = e => {
        const {
            target: {value}
        } = e;
        setClicked(!clicked)
    }
}
  return { value, clicked, onClick };
};
