import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";
import { color, transition } from "../../assets/shared/variables.js";
export const WagButton = ({
  kind,
  rightIcon,
  leftIcon,
  children,
  isActive,
  spinner,
  isFullWidth,
  ...props
}) => {
  const KIND = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    OUTLINE: "outline",
    LINK: "link",
    SELECTED: "selected",
  };

  const WagButton = styled(Button)`
    transition: ${transition.speed.ms3};
    height: 44px;
    padding: 0 20px;
    border-radius: 45px;
    background: ${color.navy};
    color: white;

    &:active {
      transform: scale(0.8);
      box-shadow: 0 3px 0 rgba(0, 0, 0, 0);
    }
    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }
    ${(props) =>
      props.kind === KIND.PRIMARY &&
      `
      &:hover {
        background: ${color.denim};
      }
    `}
    ${(props) =>
      props.kind === KIND.SECONDARY &&
      `
      background: ${color.skyblue};
      color: ${color.navy};
      &:hover {
        background: #a7dee9;
      }
    `}
  ${(props) =>
      props.kind === KIND.OUTLINE &&
      `
      background: white;
      color: ${color.denim};
      box-shadow: 0px 0px 0px 1px ${color.denim};
      &:hover {
        background: ${color.skyblue};
      }
    `}
  ${(props) =>
      props.kind === KIND.LINK &&
      `
      background: none;
      padding: 0;
      color: ${color.denim};
      display: inline-block;
      position: relative;
      overflow: hidden;
      border-radius: 0;
      height: auto;
      align-self: center;
      
      &:before{
        transition: ${transition.speed.ms3};
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(${color.navyRGB}, 0.1);
        z-index: -1;
        content: '';
      }

      &:hover::before{
          transform: translateX(0);
          z-index: 0;
      }

      &:disabled {
        background: none;
      }
    `}
    ${(props) =>
      props.kind === KIND.SELECTED &&
      `
	    background: ${color.denim};
      pointer-events: none;
      &:after {
        content: '';
        position: absolute;
        border: 1px solid white;
        height: 75%;
        width: 90%;
        border-radius: 45px;
      }
    `}
  ${(props) =>
      props.isDisabled &&
      `
	    background: ${color.disabledgray};
	    color: ${color.grayAA};
	    pointer-events: none;
      opacity: 1 !important;
    `}
  `;

  return (
    <WagButton
      kind={kind}
      isFullWidth={isFullWidth}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      role="button"
      spinner={spinner}
      // isLoading
      // {...rest}
      {...props}
    >
      <strong>{children}</strong>
    </WagButton>
  );
};

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
WagButton.propTypes = {
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
  kind: PropTypes.oneOf(["primary", "secondary", "outline", "link"]),
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
  isFullWidth: PropTypes.bool,
  // isDisabled: PropTypes.bool,
  /**
   * Icon within button
   */
  // hasIcon: PropTypes.bool,
  /**
   * Is the button disabled?
   */
  isDisabled: PropTypes.bool,

  /**
   * Loading
   */
  isLoading: PropTypes.bool,
};
WagButton.defaultProps = {
  // backgroundColor: color.navy,
  kind: "primary",
  // onClick: undefined,
  // fullWidth: false,
  isDisabled: false,
  isLoading: false,
};
