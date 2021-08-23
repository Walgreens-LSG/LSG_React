import { propNames } from "@chakra-ui/react";
import { WagInfoIcon } from "../components/Icons/Info";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import React from "react";

import { WagAccordion } from "../components/Accordion/Accordion";
import { WagAccordionItem } from "../components/Accordion/AccordionItem";
import { WagAccordionTitle } from "../components/Accordion/AccordionTitle";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Accordion",
  component: WagAccordion,
  // subcomponent: { WagAccordionDescription },
  argTypes: {
    // backgroundColor: { control: 'color' },
    // kind: { control: { type: 'radio' } }
    // icon: {
    //   options: ["info", "success", "error"],
    //   mapping: {
    //     info: <WagInfoIcon />,
    //     success: <WagCheckCircleIcon />,
    //     error: <WagAccordionIcon />,
    //   },
    // },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <WagAccordion></WagAccordion>;
export const Default = Template.bind({});
Default.args = {
  Description:
    "Information alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tortor.",
  linkText: "Refill now",
};

export const Info = () => (
  <WagAccordion>
    <WagAccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Section 1 title
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </WagAccordionItem>

    <WagAccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Section 2 title
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </WagAccordionItem>
  </WagAccordion>
);
