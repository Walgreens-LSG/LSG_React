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
    BASIC: 'basic',
    BLANK: 'blank'
  };
  const WagCard = styled(WagBox)`
   width: fit-content;
   background: ${color.white};
   padding: 12px;
   border-radius: 8px;
   flex-wrap: nowrap;
   -webkit-transition: all 0.3s ease;
   

   
   
   ${(props) =>
      props.kind === KIND.BASIC &&
    `
      box-shadow: 0 1px 6px 1px rgb( 64 64 64 / 15%);
      &:hover{
        border: 1px solid ${color.stroke};
      }
    `}
    ${(props) =>
      props.kind === KIND.BLANK &&
    `
      border: 1px solid ${color.stroke};
    `}
  `;
  return (
      <WagCard
        {...props}
        kind={kind}
      >
        { children }
      </WagCard>
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
   * What type of card are you using?
   */
   kind: PropTypes.oneOf([ "basic", "blank"]),
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
   kind: "basic",
  // onClick: undefined,
  // fullWidth: false,
  // isDisabled: false,
  // isLoading: false,
};
