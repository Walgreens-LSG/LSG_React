import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/source-sans-pro/300.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/700.css";
import { Button } from "../assets/shared/components/Button/ButtonStyles";
import { color, fonts } from "../assets/shared/variables.js";
// 1. Import the extendTheme function
// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//   // Primary
//     red:      '#e62600',
//     navy:     '#323264',
//     navyRGB:  '50, 50, 100',
//     skyblue:  '#c2e8ff',
//     cream:    '#f5f5f0',

//     // Secondary
//     ruby:       '#aa0a0a',
//     teal:       '#0082aa',
//     denim:      '#284b9b',
//     sienna:     '#dc7846',
//     lightcream: '#f9f9f6',

//     // Seasonal
//     holidayred: '#d91734',
//     green:      '#00853e',
//     pink:       '#e60572',
//     yellow:     '#fff284',
//     orange:     '#eD8B00',

//     // Grayscale
//     disabledgray: '#d9dada',
//     stroke: 			'#989090',
//     gray: 				'#707575',
//     grayAA:		    '#707575',
//     darkgray: 		'#414646',
//     typegray: 		'#0a1414',

//     white:        '#ffffff',
//     black:        '#000000',

//     // Birchbox
//     bbxcoral:   '#FFA983',
//     bbxneutral: '#FFF6F2',
//   },
// }

// const fonts = {
//   heading: "Source Sans Pro",
//   body: "Source Sans Pro",
// }

const theme = extendTheme({
  color,
  fonts,
  components: {
    Button,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
