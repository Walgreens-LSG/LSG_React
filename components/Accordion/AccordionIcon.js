import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { 
  AccordionIcon 
} from "@chakra-ui/react";

export const WagAccordionIcon = ({ 

}) => {
  const WagAccordionIcon = styled(AccordionIcon)``;
  return (
      <WagAccordionIcon/>
  );
};

WagAccordionIcon.propTypes = {
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
WagAccordionIcon.defaultProps = {
  // backgroundColor: color.navy,
  // kind: "primary",
  // onClick: undefined,
  // fullWidth: false,
  // isDisabled: false,
  // isLoading: false,
};
