import '../styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import React from 'react';

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { color, fonts } from '../assets/shared/variables.js';

const theme = extendTheme({ color, fonts,
})

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];