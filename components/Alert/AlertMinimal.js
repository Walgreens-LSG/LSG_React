import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { WagInfoIcon } from "../Icons/Icons";
import { Alert, CloseButton } from "@chakra-ui/react";
import { color, spacing } from "../../assets/shared/variables.js";
export const WagAlertMinimal = ({
  kind,
  icon,
  children,
  padding,
  dismissable,
  ...props
}) => {
  const KIND = {
    ERROR: "error",
    WARNING: "warning",
    SUCCESS: "success",
    INFO: "info",
  };

  const WagAlertMinimal = styled(Alert)`
    border-radius: ${spacing.borderRadius.default}px;
    background: ${color.white};
    font-size: 1.125rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
    a {
      display: inline-flex;
    }
    a svg {
      width: 0.875rem;
      height: 0.875rem;
    }
    button svg {
      width: 1em;
      height: 1em;
    }
    ${(props) =>
      props.kind === KIND.ERROR &&
      `
      color: ${color.red};
    `}
    ${(props) =>
      props.kind === KIND.WARNING &&
      `
      color: ${color.warningAA};
    `}
    ${(props) =>
      props.kind === KIND.SUCCESS &&
      `
      color: ${color.green};
    `}
    ${(props) =>
      props.kind === KIND.INFO &&
      `
      color: ${color.denim};
    `}
  `;

  return (
    <WagAlertMinimal
      kind={kind}
      padding={padding}
      dismissable={dismissable}
      {...props}
    >
      {children}
    </WagAlertMinimal>
  );
};

WagAlertMinimal.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * What type of alert are you using?
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
  dismissable: PropTypes.bool,

  /**
   * Loading
   */
  // isLoading: PropTypes.bool,
};

WagAlertMinimal.defaultProps = {
  // backgroundColor: color.navy,
  kind: "info",
  // onClick: undefined,
  // fullWidth: false,
  dismissable: false,
  // isLoading: false,
};
