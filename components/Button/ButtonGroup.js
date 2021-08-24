import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ButtonGroup, useStyleConfig } from "@chakra-ui/react";
import { WagButton } from "./Button";
import { color, transition } from "../../assets/shared/variables.js";
export const WagButtonGroup = ({
  isFullWidth,
  isDisabled,
  children,
  ...props
}) => {
  const WagButtonGroup = styled(ButtonGroup)`
    height: auto;
    ${(props) =>
      props.isFullWidth &&
      `
	      display: block;
        button, a {
          margin-inline-start: 0 !important; 
          &:last-of-type {
            margin-top: 1em;
          }
        }

    `}
  `;

  return (
    <WagButtonGroup spacing="6" isFullWidth={isFullWidth} {...props}>
      {children}
    </WagButtonGroup>
  );
};

WagButtonGroup.propTypes = {
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
  // kind: PropTypes.oneOf(['primary','secondary', 'outline', 'link']),
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
  // isDisabled: PropTypes.bool,
  /**
   * Loading
   */
  // isLoading: PropTypes.bool,
};

WagButtonGroup.defaultProps = {
  // backgroundColor: color.navy,
  // kind: 'primary',
  // onClick: undefined,
  // fullWidth: false,
  // isDisabled: false,
  // isLoading: false,
};
