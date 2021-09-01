import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Accordion, typography } from "@chakra-ui/react";
import { color, typography as WagType, transition } from "../../assets/shared/variables.js";
import { render } from "react-dom";

//export const WagAccordion = ({ children, ...props }) => {
export const WagAccordion = ({ 
  children,
  allowMultiple,
  allowToggle,
  ...props 
}) => {
    const KIND = {};
    
  const WagAccordion = styled(Accordion)`
    h2, h3, h4, h5, h6 {
      width: 100%;
      color: ${color.denim};
      margin-top: 12px;
      margin-bottom: 12px;
      font-weight: bold;
    }
    
    padding: 0 20px;
    border-radius: 45px;
    font-family: ${WagType.type.primary};

    &::before{
      border-color: ${color.stroke};
    }
    &::after{
      border-color: ${color.stroke};
    }
    button[aria-expanded="true"]{
      color: ${color.typegray};
    }
    button[aria-expanded="false"]{
      color: ${color.denim};
    }
    button:visited{
      color: ${color.typegray};
      background: ${color.white};
    }
    button:focus{
      color:${color.typegray};
    }
    button:hover{
      color: ${color.typegray};
      background: ${color.white};
    }
    button:active{
      color: ${color.typegray};
      background: ${color.white};
    }
   
    
    

    
    
    }
    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }
 
  `;
  
 return (
  <WagAccordion
        {...props}
      >
        {children}
      </WagAccordion>
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
WagAccordion.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * What type of accordion are you using?
   */
  // kind: PropTypes.oneOf(["default"]),
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
  allowToggle: PropTypes.bool,
  /**
   * Will permit multiple items to be expanded at once.
   */
  allowMultiple: PropTypes.bool,
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
WagAccordion.defaultProps = {
  // backgroundColor: color.navy,
   //kind: "default",
  // onClick: undefined,
  // fullWidth: false,
  allowMultiple: undefined,
  allowToggle: undefined,
};
