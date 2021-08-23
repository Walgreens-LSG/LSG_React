import React from 'react';
import styled from '@emotion/styled'
import { Button, useStyleConfig } from '@chakra-ui/react'
import { color, transition } from '../../assets/shared/variables.js';
// export const WAGButton = ({ kind, children, ...props }) => {

  const KIND = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    OUTLINE: 'outline',
    LINK: 'link',
  };

  export const WAGButtonBase = styled(Button)`
    transition: ${transition.speed.ms3};
    height: 44px;
    padding: 0 20px;
    border-radius: 45px;
    &:active{
      transform: scale(.8);
      box-shadow: 0 3px 0 rgba(0,0,0,0);
    }

`;
// };