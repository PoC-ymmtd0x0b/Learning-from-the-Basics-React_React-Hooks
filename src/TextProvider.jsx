import React, { createContext } from "react";
import PropTypes from "prop-types";

export const TextContext = createContext();

const text = "これはProviderから渡されたテキストです。";

export const TextProvider = ({ children }) => {
  return <TextContext.Provider value={text}>{children}</TextContext.Provider>;
};

TextProvider.propTypes = {
  children: PropTypes.object,
};
