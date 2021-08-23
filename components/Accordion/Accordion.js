import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Accordion } from "@chakra-ui/react";
import { color, transition } from "../../assets/shared/variables.js";
export const WagAccordion = ({ children, ...props }) => {
  const WagAccordion = styled(Accordion)`
    h2,
    h3,
    h4,
    h5,
    h6 {
      width: 100%;
    }
    /* transition: ${transition.speed.ms3};
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
 */
  `;

  return <WagAccordion {...props}>{children}</WagAccordion>;
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
WagAccordion.defaultProps = {
  // backgroundColor: color.navy,
  // kind: "primary",
  // onClick: undefined,
  // fullWidth: false,
  // isDisabled: false,
  // isLoading: false,
};
