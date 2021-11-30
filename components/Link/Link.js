import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { color, typography } from "../../assets/shared/variables";
import { Link } from "@chakra-ui/layout";
import { WagBox } from "../Box/Box";
export const WagLink = ({ 
    kind,
    children,
  ...props 
}) => {
  const KIND = {
   Default: 'default',
   CTA:"CTA",
   INLINE:"inline",
   UNDERLINE:"underline"
  };
  const WagLink = styled(Link)`
    display: inline-block;
    color: ${color.denim};
    outline: none !important;
    width: content-fit;
    transition: all .3s ease-in-out !important;

    :hover, :focus{
        text-decoration:none;
        outline: 2px solid ${color.denim};
        border-radius: 2px;
    }
    
    ${(props) =>
    props.kind === KIND.CTA &&
    `
        font-weight: ${typography.weight.bold};
        line-height: ${typography.lineHeight.paragraph};
        :after{
            padding-left: 8px;
            content: ">";
            font-size: ${typography.size.descriptor};
        }
        :hover:after{
                padding-left: 12px;
                color: ${color.teal};        
        }

    `}
    ${(props) =>
    props.kind === KIND.INLINE &&
    `
       font-weight: ${typography.weight.regular};
       font-size: ${typography.size.paragraph};
       background: transparent;
       border-bottom: 1px solid ${color.navy};

       :hover, :focus{
            transition: background .3s ease-in-out;
            color: ${color.white};
            background: ${color.navy};
        }
       
    `}
    ${(props) =>
    props.kind === KIND.UNDERLINE &&
    `
    width: fit-content;
    font-size: inherit;
    background: transparent;
    border-bottom: 1px solid ${color.denim};

    :hover, :focus{
        transition: background .3s ease-in-out;
        color: ${color.white};
        background: ${color.denim};
    }
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
   kind: PropTypes.oneOf(["CTA", "inline", "underline", "default"]),
  /**
   * Link Text
   */
  text: PropTypes.string,
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
    kind:"default",
    href:"#!",
   isExternal: false,
   text:null
  // onClick: undefined,
  // fullWidth: false,
  // isDisabled: false,
  // isLoading: false,
};
