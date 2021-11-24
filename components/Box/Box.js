import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { 
  Box, 
} from "@chakra-ui/react";

export const WagBox = ({ 
  children, 
  ...props 
}) => {
  const ORIENTATION = {
    ROW: "row",
    COLUMN: "column",
    BLOCK: "block"
  };
  const WagBox = styled(Box)`
    display: flex;
    position: relative;
    ${(props)=>
    props.orientation === ORIENTATION.ROW &&
    `
      flex-direction: row;
    `}
    ${(props)=>
    props.orientation === ORIENTATION.COLUMN &&
    `
      flex-direction: column;
      gap: 8px;
    `}
    ${(props)=>
    props.orientation === ORIENTATION.BLOCK&&
    `
      flex-direction: block;
    `}
  `;
  return (
      <WagBox 
        {...props}
        orientation={props.orientation}
        width={props.width} 
      > 
        {children} 
      </WagBox>
  );
};

WagBox.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * What is the Box's default orientation
   */
   orientation: PropTypes.oneOf(["column", "row", "default"]),
  /**
   * The width of the Box
   */
  width: PropTypes.string,
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
WagBox.defaultProps = {
  orientation: "block",
  width: "100px",
  // onClick: undefined,
  // fullWidth: false,
  // isDisabled: false,
  // isLoading: false,
};
