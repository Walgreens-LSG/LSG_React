import { propNames } from "@chakra-ui/react";
import { WagInfoIcon } from "../components/Icons/Info";
import React from "react";



import { WagHeading } from "../components/Heading/Heading";


//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Heading",
  component: WagHeading,
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
  <WagHeading
    kind={args.kind}
  >hi</WagHeading>
  //textGenerator(args)
);

function textGenerator(args){
  // This function determines what variation of the
  //text will render based on text type
 
  if(args.truncated){
    return(
      <WagHeading
        kind={args.kind}
        color={args.color}
        isTruncated
      >
        {args.text}
      </WagHeading>
    );
  }
  else{
    return(
      <WagHeading 
        kind={args.kind} 
        color={args.color}
      >
        {args.text}
      </WagHeading>
    );
  }

}


 
export const Default = Template.bind({});
Default.args = {
  text: 'Lorem Ipsum',
  kind: "marketingLarge",
  color: "textGray",
  truncated: false,
};

export const Marketing_Large_Heading = () => (
  <WagHeading kind="marketingLarge" color="denim">Hello, Healthy </WagHeading>
);

export const Marketing_Medium_Heading = () => (
  <WagHeading kind="marketingMedium" color="denim">Hello, Healthy </WagHeading>
);

export const Marketing_Small_Heading = () => (
  <WagHeading kind="marketingSmall" color="denim">Hello, Healthy </WagHeading>
);

export const Marketing_Extra_Small_Heading = () => (
  <WagHeading kind="marketingXSmall" color="denim">Hello, Healthy </WagHeading>
);

export const Large_Heading = () => (
  <WagHeading kind="headingLarge" color="denim">Hello, Healthy </WagHeading>
);

export const Medium_Heading = () => (
  <WagHeading kind="headingMedium" color="denim">Hello, Healthy </WagHeading>
);

export const Small_Heading = () => (
  <WagHeading kind="headingSmall" color="denim">Hello, Healthy </WagHeading>
);



