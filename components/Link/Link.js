import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { color, typography } from "../../assets/shared/variables";
import { Link } from "@chakra-ui/layout";
export const WagLink = ({ 
    kind,
    children,
  ...props 
}) => {
  const KIND = {
   CTA:"CTA",
   INLINE:"inline",
   UNDERLINE:"underline"
  };
  const WagLink = styled(Link)`
    color: ${color.denim};
    
    ${(props) =>
    props.kind === KIND.CTA &&
    `
        font-weight: ${typography.weight.bold};
        line-height: ${typography.lineHeight.paragraph};
    `}

    
  `;
  return (
      <WagLink 
        {...props}
        href={props.href}
        isExternal={props.isExternal}
        kind={kind}
      > 
        {children} 
      </WagLink>
  );
};

WagLink.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  /**
   * Where does this link go?
   */
   href: PropTypes.string.isRequired,
   /**
   * Is this link external?
   */
    isExternal: PropTypes.bool,
  /**
   * What kind of Link are you using
   */
   kind: PropTypes.oneOf(["CTA", "inline", "underline"]),
  /**
   * The width of the Box
   */
  //width: PropTypes.string,
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
WagLink.defaultProps = {
   href:"https://walgreens.com",
   isExternal: true
  // onClick: undefined,
  // fullWidth: false,
  // isDisabled: false,
  // isLoading: false,
};
