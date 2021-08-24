import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { AlertDescription } from "@chakra-ui/react";
export const WagAlertDescription = ({ children, ...props }) => {
  const WagAlertDescription = styled(AlertDescription)``;

  return <WagAlertDescription {...props}>{children}</WagAlertDescription>;
};
