import { propNames } from "@chakra-ui/react";
import { WagInfoIcon } from "../components/Icons/Info";
import React from "react";


import { WagAccordion } from "../components/Accordion/Accordion";
import { WagAccordionItem } from "../components/Accordion/AccordionItem";
import { WagAccordionTitle } from "../components/Accordion/WagAccordionTitle";
import { WagAccordionButton } from "../components/Accordion/AccordionButton"; // may be absolted once i introduce accordion title
import { WagAccordionPanel } from "../components/Accordion/AccordionPanel";


//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Accordion",
  component: WagAccordion,
  subcomponent: { WagAccordionItem },
  argTypes: {
    kind: {  
      control: { 
        type: 'radio',
      } 
    }
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  
  accordionGenerator(args)
  
);

function accordionGenerator(args){

  if(args.kind === "Default"){
    return(
      <WagAccordion
      >
      {accordionGuts(args)}
      {accordionGuts(args)}
      {accordionGuts(args)}
  
    </WagAccordion>
    );
  }
  if(args.kind === "AllowToggle"){
    return(
      <WagAccordion
        allowToggle
      >
      {accordionGuts(args)}
      {accordionGuts(args)}
      {accordionGuts(args)}
  
    </WagAccordion>
    );
  }
  if(args.kind === "AllowMultiple"){
    return(
      <WagAccordion
        allowMultiple
      >
      {accordionGuts(args)}
      {accordionGuts(args)}
      {accordionGuts(args)}
  
    </WagAccordion>
    );
  }
  
}

function accordionGuts(args){
  return(
    <WagAccordionItem>
      <h2>
        <WagAccordionButton>
          {args.label}
        </WagAccordionButton>
      </h2>
      <WagAccordionPanel >
        {args.panel}
      </WagAccordionPanel>
    </WagAccordionItem>
     
  );
};
 
export const Default = Template.bind({});
Default.args = {
  panel:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  label: 'Lorem Ipsum',
  kind: "Default"
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
