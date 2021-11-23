import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {color, alertColors} from "../../assets/shared/variables.js";

import{WagText} from "../Text/Text";
import { WagBox } from "../Box/Box.js";

export const WagCard = ({ 
  children,
  kind, 
  ...props 
}) => {
  const KIND = {
    
  };
  const WagCard = styled(WagBox)`
   background: ${color.white};
   padding: 12px;
   border-radius: 8px;
   flex-wrap: nowrap;
   box-shadow: 0 1px 6px 1px rgb( 64 64 64 / 15%);

   &:focus, &:hover{
    transition: .3s;
    border: 1px solid ${color.stroke};
   }
  `;
  return (
      <WagCard></WagCard>
  );
};

WagCard.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * What type of badge are you using?
   */
   //kind: PropTypes.oneOf(["denim", "sky", "warning", "creme", "error", "pickup"]),
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
WagCard.defaultProps = {
  // backgroundColor: color.navy,
   //kind: "denim",
  // onClick: undefined,
  // fullWidth: false,
  // isDisabled: false,
  // isLoading: false,
};
