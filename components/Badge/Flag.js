import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {color, alertColors} from "../../assets/shared/variables.js";
import { 
  Badge, 
} from "@chakra-ui/react";
import{WagText} from "../Text/Text";
import { WagBox } from "../Box/Box.js";


export const WagFlag = ({ 
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
  const WagFlag = styled(Badge)`
    clip-path: polygon(100% 0, 0 0, 100% 100%);
    border-radius: 0 8px 0 0;
    width: 100%;
    height: 100%;
    max-height: 100px;
    max-width: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    position: absolute;
    top: -12px;
    right: -12px;
    z-index: 2;

    div{
        height: 100%;
        top: 10px;
        left: 10px;
    
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        align-items: center:
        justify-content: space-between;
    }

    p{  
        width: 50%;
        white-space:normal;
        line-height: 1.2;
        text-align:right;
        text-transform: none;
        font-size: 0.875rem;
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
      <WagFlag 
        kind={kind}
        {...props} 
      > 
        <WagBox >
            <WagText kind="disclaimor"> 
                {children} 
            </WagText>
        </WagBox> 
      </WagFlag>
  );
};

WagFlag.propTypes = {
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
WagFlag.defaultProps = {
  // backgroundColor: color.navy,
   kind: "denim",
  // onClick: undefined,
  // fullWidth: false,
  // isDisabled: false,
  // isLoading: false,
};
