import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {color, alertColors} from "../../assets/shared/variables.js";

import { Image } from "@chakra-ui/image";

export const WagImage = ({ 
  children,
  ...props 
}) => {
  const WagImage = styled(Image)``;
  return (
      <WagImage
        src={props.src}
        alt={props.alt}
        borderRadius={props.borderRadius}
        boxSize={props.boxSize}
      />
  );
};

WagImage.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  /**
   * Image Source / URL
   */
   src: PropTypes.string.isRequired,
   /**
   * Fallback images can be provided for when loading errors occur
   */
    fallbackSrc: PropTypes.string,
   /**
   * Alternatice Image Text for Screenreaders
   */
    alt: PropTypes.string.isRequired,
    /**
   * Is the Image Rounded?
   */
   borderRadius: PropTypes.oneOf(["full"]),
  /** 
  *Set Image Size
   */
   boxSize: PropTypes.string,
  /**
   * What type of badge are you using?
   */
   //kind: PropTypes.oneOf(["denim", "sky", "warning", "creme", "error", "pickup"]),
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
WagImage.defaultProps = {
  // backgroundColor: color.navy,
   src:"https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
   alt:"Alt Img Txt",
   objectFit:"image fit",
   borderRadius:null,
   fallbackSrc: null,
   boxSize: "150px"
};
