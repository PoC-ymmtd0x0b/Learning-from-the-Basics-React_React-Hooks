import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={[count, setCount]}>
      {children}
    </CountContext.Provider>
  );
};

CountProvider.propTypes = {
  children: PropTypes.object,
};
