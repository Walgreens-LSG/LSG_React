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
import { WagAccordionTitle } from "../components/Accordion/WagAccordionTitle";
import { WagAccordionButton } from "../components/Accordion/AccordionButton"; // may be absolted once i introduce accordion title
import { WagAccordionPanel } from "../components/Accordion/AccordionPanel";


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
        <WagAccordionButton>
          {args.label}
        </WagAccordionButton>
      </h2>
      <WagAccordionPanel >
        {args.description}
      </WagAccordionPanel>
    </WagAccordionItem>

    {/* example separation */}
    <WagAccordionItem>
      <h2>
        <WagAccordionButton>
          {args.label}
        </WagAccordionButton>
      </h2>
      <WagAccordionPanel >
        {args.description}
      </WagAccordionPanel>
    </WagAccordionItem>

    <WagAccordionItem>
      <h2>
        <WagAccordionButton>
          {args.label}
        </WagAccordionButton>
      </h2>
      <WagAccordionPanel >
        {args.description}
      </WagAccordionPanel>
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
        <WagAccordionButton>
          Section 1 title
        </WagAccordionButton>
      </h2>
      <WagAccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </WagAccordionPanel>
    </WagAccordionItem>

    <WagAccordionItem>
      <h2>
        <WagAccordionButton>
          Section 2 title
        </WagAccordionButton>
      </h2>
      <WagAccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </WagAccordionPanel>
    </WagAccordionItem>
  </WagAccordion>
);

export const Toggle_Enabled = () => (
  <WagAccordion 
    allowToggle
  >
    <WagAccordionItem>
      <h2>
        <WagAccordionButton>
          Section 1 title
        </WagAccordionButton>
      </h2>
      <WagAccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </WagAccordionPanel>
    </WagAccordionItem>

    <WagAccordionItem>
      <h2>
        <WagAccordionButton>
          Section 2 title
        </WagAccordionButton>
      </h2>
      <WagAccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </WagAccordionPanel>
    </WagAccordionItem>
  </WagAccordion>
);
