import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Text, typography as Typography } from "@chakra-ui/react";
import { color, typography, transition } from "../../assets/shared/variables.js";
import { render } from "react-dom";


export const WagText = ({ 
  children,
  kind,
  ...props 
}) => {
    const KIND = {
      // General text
      PARAGRAPH: "paragraph",
      DESCRIPTOR: "descriptor",
      DISCLAIMER: "disclaimer",
      //Price
      PRICELARGE: "priceLarge",
      PRICEMEDIUM: "priceMedium",
      PRICESMALL: "priceSmall",
    };
    const COLOR = {
      //Primary
      WAGRED: "walgreensRed",
      CREAM : "cream",
      NAVYBLUE : "navyBlue",
      SKYBLUE: "skyBlue",
      //Secondary
      RUBY: 'ruby',
      TEAL: 'teal',
      DENIM: 'denim',
      SIENNA: 'sienna',
      LIGHTCREAM: 'lightCream',
      // Seasonal
      SEASONALRED: 'seasonalRed',
      SEASONALGREEN: 'seasonalGreen',
      SEASONALPINK: 'seasonalPink',
      SEASONALORANGE: 'seasonalOrange',
      VALUEYELLOW: 'valueYellow',
      //Gray Scale
      DISABLED: 'disabled',
      GRAY: 'gray',
      TEXTGRAY: 'textGray',
      DARKGRAY: 'darkGray',
      BLACK: 'black'
    };
    
  const WagText = styled(Text)`
    font-family: ${typography.type.primary};   
    line-height: ${typography.lineHeight.marketing};
    // text type
    ${(props)=> props.kind === KIND.PARAGRAPH &&
      `
        font-size: ${typography.size.paragraph};
        font-weight: ${typography.weight.regular};
        line-height: ${typography.lineHeight.paragraph};
    `}
    ${(props)=> props.kind === KIND.DESCRIPTOR &&
      `
        font-size: ${typography.size.descriptor};
        font-weight: ${typography.weight.regular};
        line-height: ${typography.lineHeight.paragraph};
    `}
    ${(props)=> props.kind === KIND.DISCLAIMER &&
      `
        font-size: ${typography.size.disclaimer};
        font-weight: ${typography.weight.regular};
        line-height: ${typography.lineHeight.paragraph};
    `}
    ${(props)=> props.kind === KIND.PRICELARGE &&
      `
        font-size: ${typography.size.priceLarge};
        font-weight: ${typography.weight.bold};
        line-height: ${typography.lineHeight.price};
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        sup {
          font-size: ${typography.size.priceLargeSup};
          position: relative;
          margin-top: 4px;
          top: 0.5rem;
        }
    `}
    ${(props)=> props.kind === KIND.PRICEMEDIUM &&
      `
        font-size: ${typography.size.priceMedium};
        font-weight: ${typography.weight.bold};
        line-height: ${typography.lineHeight.price};
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        sup {
          font-size: ${typography.size.priceMediumSup};
          position: relative;
          top: 0.5rem;
        }
    `}
    ${(props)=> props.kind === KIND.PRICESMALL &&
      `
        font-size: ${typography.size.priceSmall};
        font-weight: ${typography.weight.bold};
        line-height: ${typography.lineHeight.priceSmall};
    `}
    //text colors
    ${(props)=> props.color === COLOR.WAGRED && 
    `
      color: ${color.red};
    `}
    ${(props)=> props.color === COLOR.CREAM && 
      `
        color: ${color.cream};
    `}
    ${(props)=> props.color === COLOR.NAVYBLUE && 
      `
        color: ${color.navy};
    `}
    ${(props)=> props.color === COLOR.SKYBLUE && 
      `
        color: ${color.skyblue};
    `}
    ${(props)=> props.color === COLOR.RUBY && 
      `
        color: ${color.ruby};
    `}
    ${(props)=> props.color === COLOR.TEAL && 
      `
        color: ${color.teal};
    `}
    ${(props)=> props.color === COLOR.DENIM && 
      `
        color: ${color.denim};
    `}
    ${(props)=> props.color === COLOR.SIENNA && 
      `
        color: ${color.sienna};
    `}
    ${(props)=> props.color === COLOR.LIGHTCREAM && 
      `
        color: ${color.lightcream};
    `}
    ${(props)=> props.color === COLOR.SEASONALRED && 
      `
        color: ${color.holidayred};
    `}
    ${(props)=> props.color === COLOR.SEASONALGREEN && 
      `
        color: ${color.green};
    `}
    ${(props)=> props.color === COLOR.SEASONALPINK && 
      `
        color: ${color.pink};
    `}
    ${(props)=> props.color === COLOR.SEASONALORANGE && 
      `
        color: ${color.orange};
    `}
    ${(props)=> props.color === COLOR.VALUEYELLOW && 
      `
        color: ${color.yellow};
    `}
    ${(props)=> props.color === COLOR.DISABLED && 
      `
        color: ${color.disabledgray};
    `}
    ${(props)=> props.color === COLOR.GRAY && 
      `
        color: ${color.gray};
    `}
    ${(props)=> props.color === COLOR.TEXTGRAY && 
      `
        color: ${color.typegray};
    `}
    ${(props)=> props.color === COLOR.DARKGRAY && 
      `
        color: ${color.darkgray};
    `}
    ${(props)=> props.color === COLOR.BLACK && 
      `
        color: ${color.black};
    `}
    
  `;
  
 return (
      <WagText
        {...props}
        kind={kind}
        color={props.color}
        as={props.element}
      >
        {children}
      </WagText>

      //
      //{kind:"AllowToggle" ? <WagAccordion allowToggle {...props}>{children} </WagAccordion> : null}
 );

 
}







// Potential option for exporting button kinds as separate components
// export const WagButtonSecondary = () => {
//   return <WagButton {...props} kind="secondary"></WagButton>;
// };
// export const WagButtonTertiary = () => {
//   return <WagButton {...props} kind="tertiary"></WagButton>;
// };
// export const WagButtonLink = () => {
//   return <WagButton {...props} kind="link"></WagButton>;
// };
WagText.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  /**
   * What does your text say?
   */
   text: PropTypes.string,
  /**
   * What style of text are you using?
   */
   kind: PropTypes.oneOf([ "paragraph", "descriptor", "disclaimer", "priceLarge",
   "priceMedium", "priceSmall",]),
   /**
    * What color is your text
    */
   color: PropTypes.oneOf(["walgreensRed", "cream", "navyBlue", "skyBlue",
   "ruby", "teal", "denim", "lightCream", "seasonalRed", "seasonalGreen",
   "seasonalPink", "seasonalOrange", 'valueYellow', "disabled", "gray", 
   "textGray", "darkGray", "black"]),
   /**
    * You can overide the html output of this component
    */
  //   element: PropTypes.oneOf(["i", "u", "abbr", "cite", "del", "em", "ins",
  //  "kbd", "mark", "s", "samp", "sub", "sup"]),
  /**
   * Button contents
   */
  // label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  // onClick: PropTypes.func,
  /**
   * Any expanded item may collapse again.
   */
  //allowToggle: PropTypes.bool,
  /**
   * Will permit multiple items to be expanded at once.
   */
  //allowMultiple: PropTypes.bool,
  // isFullWidth: PropTypes.bool,
  // isDisabled: PropTypes.bool,
  /**
   * Does the text need to be truncated?
   */
   truncated: PropTypes.bool,
  /**
   * Is the button disabled?
   */
  // isDisabled: PropTypes.bool,
  /**
   * Loading
   */
  // isLoading: PropTypes.bool,
};
WagText.defaultProps = {
  // backgroundColor: color.navy,
   kind: "paragraph",
   color: "textGray",
   text: "Add Text",
   element: null,
   truncated: false,
  //allowMultiple: undefined,
  //allowToggle: undefined,
};
