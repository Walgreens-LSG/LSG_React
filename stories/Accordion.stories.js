import { propNames } from "@chakra-ui/react";
import { WagInfoIcon } from "../components/Icons/Info";
import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { WagAccordion } from "../components/Accordion/Accordion";
import { WagAccordionItem } from "../components/Accordion/AccordionItem";
import { WagAccordionTitle } from "../components/Accordion/AccordionTitle";
//import { WagAccordionButton } from "../components/Accordion/AccordionButton";


//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Accordion",
  component: WagAccordion,
  // subcomponent: { WagAccordionDescription },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   kind: { control: { type: 'radio' } },
  //   icon: {
  //     options: ["info", "success", "error"],
  //     mapping: {
  //       info: <WagInfoIcon />,
  //       success: <WagCheckCircleIcon />,
  //       error: <WagAccordionIcon />,
  //     },
  //   },
  // },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <WagAccordion>
    <WagAccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
           <strong>{args.label}</strong> 
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{args.description}</AccordionPanel>
    </WagAccordionItem>
    <WagAccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <strong>{args.label}</strong>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{args.description}</AccordionPanel>
    </WagAccordionItem>
    <WagAccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <strong>{args.label}</strong>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{args.description}</AccordionPanel>
    </WagAccordionItem>
  </WagAccordion>
);
 
export const Default = Template.bind({});
Default.args = {
  description:
    "Information alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tortor.",
  allowMultiple: undefined,
  allowToggle: undefined,
  label: 'Lorem Ipsum'
};

export const Multiple_Expanded = () => (
  <WagAccordion 
    allowMultiple
  >
    <WagAccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
          <strong>Section 1 title</strong>
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
          <strong>Section 2 title</strong>
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

export const Toggle_Enabled = () => (
  <WagAccordion 
    allowToggle
  >
    <WagAccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
          <strong>Section 1 title</strong>
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
          <strong>Section 2 title</strong>
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
