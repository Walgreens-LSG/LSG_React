import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { CloseButton } from "@chakra-ui/react";
export const WagCloseButton = ({ children, ...props }) => {
  const WagCloseButton = styled(CloseButton)``;

  return (
    <WagCloseButton 
      {...props}
      position="absolute" 
      right="8px" 
      top="8px" 
      size="sm"
    >
      {children}
    </WagCloseButton>
  );
};
