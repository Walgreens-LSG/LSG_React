import { propNames } from "@chakra-ui/react";
import { WagInfoIcon } from "../components/Icons/Info";
import React from "react";



import { WagBadge } from "../components/Badge/Badge";
import { Heading } from "@chakra-ui/react"


//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Badge",
  component: WagBadge,
   subcomponent: {  },
  argTypes: {
    kind: {  
      control: { 
        type: 'select',
      } 
    },
    color: {
      control:{
        type: 'select',
      }
    }
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  // <WagHeading
  //   kind={args.kind}
  // >hi</WagHeading>
    <WagBadge>Test</WagBadge>
  // <Heading> Go</Heading>
);

function Example(args){
  

}


 
export const Default = Template.bind({});
Default.args = {
  text: 'Lorem Ipsum',
  kind: "marketingLarge",
  color: "textGray",
  truncated: false,
  as: "h1"
};

// export const Example = () => (
//   /*Example */
// );





