import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {  AccordionButton } from "@chakra-ui/react";
import { WagBox } from "../Box/Box.js";
import { WagAccordionIcon } from "../Accordion/AccordionIcon.js";

export const WagAccordionButton = ({ 
  children, 
  ...props 
}) => {
  const WagAccordionButton = styled(AccordionButton)``;
  return (
    <WagAccordionButton 
      {...props}
    >
      <WagBox 
        flex="1"
        textAlign="left"
      >
        <strong>{children}</strong>
      </WagBox>
      <WagAccordionIcon/>
    </WagAccordionButton>
  );
};

WagAccordionButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * What type of button are you using?
   */
  // kind: PropTypes.oneOf(["primary", "secondary", "outline", "link"]),
  /**
   * Button contents
   */
  // label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  // onClick: PropTypes.func,
  /**
   * Full Width
   */
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
WagAccordionButton.defaultProps = {
  // backgroundColor: color.navy,
  // kind: "primary",
  // onClick: undefined,
  // fullWidth: false,
  // isDisabled: false,
  // isLoading: false,
};
