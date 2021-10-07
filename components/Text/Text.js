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
      //Marketing Headings
      MARKETINGLARGE: "MarketingLarge",
      MARKETINGMEDIUM: "MarketingMedium",
      MARKETINGSMALL: "MarketingSmall",
      MARKETINGXSMALL: "MarketingXSmall",
      //Heading
      HEADINGLARGE: "HeadingLarge",
      HEADINGMEDIUM: "HeadingMedium",
      HEADINGSMALL: "HeadingSmall",
      // General text
      PARAGRAPH: "Paragraph",
      DESCRIPTOR: "Descriptor",
      DISCLAIMER: "Disclaimer",
      //Price
      PRICELARGE: "PriceLarge",
      PRICEMEDIUM: "PriceMedium",
      PRICESMALL: "PriceSmall",
    };
    
  const WagText = styled(Text)`
    font-family: ${typography.type.primary};
    color: ${color.typegray};
    line-height: ${typography.lineHeight.marketing};
    
    ${(props)=> props.kind === KIND.MARKETINGLARGE &&
      `
        font-size: ${typography.size.marketingLarge};
        font-weight: ${typography.weight.bold};
    `}
    ${(props)=> props.kind === KIND.MARKETINGMEDIUM &&
      `
        font-size: ${typography.size.marketingMedium};
        font-weight: ${typography.weight.bold};
    `}
    ${(props)=> props.kind === KIND.MARKETINGSMALL &&
      `
        font-size: ${typography.size.marketingSmall};
        font-weight: ${typography.weight.bold};
    `}
    ${(props)=> props.kind === KIND.MARKETINGXSMALL &&
      `
        font-size: ${typography.size.marketingXSmall};
        font-weight: ${typography.weight.bold};
        line-height: ${typography.lineHeight.marketingSmall};
    `}
    ${(props)=> props.kind === KIND.HEADINGLARGE &&
      `
        font-size: ${typography.size.headingLarge};
        font-weight: ${typography.weight.bold};
        line-height: ${typography.lineHeight.heading};
    `}
    ${(props)=> props.kind === KIND.HEADINGMEDIUM &&
      `
        font-size: ${typography.size.headingMedium};
        font-weight: ${typography.weight.bold};
        line-height: ${typography.lineHeight.heading};
    `}
    ${(props)=> props.kind === KIND.HEADINGSMALL &&
      `
        font-size: ${typography.size.headingSmall};
        font-weight: ${typography.weight.bold};
        line-height: ${typography.lineHeight.heading};
    `}
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
        font-weight: ${typography.weight.regular};
        line-height: ${typography.lineHeight.priceSmall};
    `}
  `;
  
 return (
      <WagText
        {...props}
        kind={kind}
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
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * What type of text are you using?
   */
   kind: PropTypes.oneOf(["Default", "MarketingLarge", "MarketingMedium", 
   "MarketingSmall", "MarketingXSmall", "HeadingLarge", "HeadingMedium",
   "HeadingSmall", "Paragraph", "Descriptor", "Disclaimer", "PriceLarge",
   "PriceMedium", "PriceSmall",]),
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
   * Icon within button
   */
  // hasIcon: PropTypes.bool,
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
   kind: "Default",
  // onClick: undefined,
  // fullWidth: false,
  //allowMultiple: undefined,
  //allowToggle: undefined,
};
