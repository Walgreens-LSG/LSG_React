import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {color, alertColors} from "../../assets/shared/variables.js";
import { 
  Badge, 
} from "@chakra-ui/react";
import{WagText} from "../Text/Text";

export const WagBadge = ({ 
  children,
  kind, 
  ...props 
}) => {
  const KIND = {
    DENIM: "denim",
    SKY: "sky",
    WARNING: "warning",
    CREME: "creme",
    ERROR: "error",
    PICKUP: 'pickup'
  };
  const WagBadge = styled(Badge)`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    white-space:normal; 
    p{
     text-align:center;
     text-transform: none;
     font-size: 0.875rem;
      width: 100%;
    }
    ${(props) => 
      props.kind === KIND.DENIM &&
    `
      background: ${color.denim};
      p{
        color: ${color.white};
      }
    `}
    ${(props) => 
      props.kind === KIND.SKY &&
    `
      background: ${color.skyblue};
      p{
        color: ${color.denim};
      }
    `}
    ${(props) => 
      props.kind === KIND.WARNING &&
    `
      background: ${color.yellow};
      color: ${color.denim};
    `}
    ${(props) => 
      props.kind === KIND.CREME &&
    `
      background: ${color.cream};
      p{
        color: ${color.denim};
      }
    `}
    ${(props) => 
      props.kind === KIND.ERROR &&
    `
      background: ${alertColors.red};
      p{
        color: ${color.white};
      }
    `}
    ${(props) => 
      props.kind === KIND.PICKUP &&
    `
      background: ${color.pink};
      p{
        color: ${color.white};
      }
    `}
  `;
  return (
      <WagBadge 
        kind={kind}
        {...props} 
      > 
        <WagText kind="disclaimor"> 
          {children} 
        </WagText> 
      </WagBadge>
  );
};

WagBadge.propTypes = {
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
   kind: PropTypes.oneOf(["denim", "sky", "warning", "creme", "error", "pickup"]),
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
WagBadge.defaultProps = {
  // backgroundColor: color.navy,
   kind: "denim",
  // onClick: undefined,
  // fullWidth: false,
  // isDisabled: false,
  // isLoading: false,
};
