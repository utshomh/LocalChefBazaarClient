import { useState } from "react";

const useToggle = (initialState = false) => {
  const [value, setValue] = useState(initialState);

  const toggle = () => setValue((value) => !value);

  return { value, toggle, set: setValue };
};

export default useToggle;
