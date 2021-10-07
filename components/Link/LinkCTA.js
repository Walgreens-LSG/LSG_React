import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { WagArrowRightIcon } from "../Icons/ArrowRight";
import { Link } from "@chakra-ui/react";
import { color, transition } from "../../assets/shared/variables.js";

export const WagLinkCta = ({ children, ...props }) => {
  const WagLinkCta = styled(Link)`
    display: flex;
    align-items: center;
    svg {
      transition: ${transition.speed.ms3};
      width: 0.775rem;
      height: 0.775rem;
      padding-left: 4px;
    }
    &:hover {
      text-decoration: none;
      svg {
        transform: translateX(4px);
      }
    }
  `;

  return (
    <WagLinkCta 
      {...props}
      ml={2}
    >
      <strong>{children}</strong>
      <WagArrowRightIcon />
    </WagLinkCta>
  );
};

WagLinkCta.propTypes = {
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
  kind: PropTypes.oneOf(["error", "warning", "success", "info"]),
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
  isDisabled: PropTypes.bool,

  /**
   * Loading
   */
  // isLoading: PropTypes.bool,
};

WagLinkCta.defaultProps = {
  // backgroundColor: color.navy,
  kind: "info",
  // onClick: undefined,
  // fullWidth: false,
  isdisabled: "false",
  // isLoading: false,
};
