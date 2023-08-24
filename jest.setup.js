// jest.setup.js

import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

const ChakraWrapper = ({ children }) => {
  return createElement(ChakraProvider, null, children);
};

const customRender = (ui, options) =>
  render(ui, { wrapper: ChakraWrapper, ...options });

  const testingLibrary = {
    ...require("@testing-library/react"),
    render: customRender,
  };

  export default testingLibrary;
