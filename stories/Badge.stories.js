import { propNames } from "@chakra-ui/react";
import React from "react";



import { WagBadge } from "../components/Badge/Badge";


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
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <WagBadge 
      kind={args.kind}
    >
      {args.text}
    </WagBadge>
);

function Example(args){
  

}

export const Default = Template.bind({});
Default.args = {
  text: 'Delivery Options',
  kind: "denim"
};

export const Standard_Denim = () => (
  <WagBadge> Delivery Options </WagBadge>
);

export const Standard_SkyBlue_Alt = () => (
  <WagBadge kind="sky"> Delivery Options </WagBadge>
);

export const Standard_Warning = () => (
  <WagBadge kind="warning"> Delivery Options </WagBadge>
);

export const Standard_Cream = () => (
  <WagBadge kind="creme"> Delivery Options </WagBadge>
);

export const Standard_Error = () => (
  <WagBadge kind="error"> Delivery Options </WagBadge>
);

export const Standard_Pickup = () => (
  <WagBadge kind="pickup"> Delivery Options </WagBadge>
);




