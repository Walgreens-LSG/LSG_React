import { propNames } from "@chakra-ui/react";
import React from "react";



import { WagBadge } from "../components/Badge/Badge";
import { WagCard } from "../components/Card/Card";
import { WagBox } from "../components/Box/Box";

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

    <WagCard kind="blank">
      <WagBox width="200px" height="300px">
        <WagBadge 
          kind={args.kind}
        >
          {args.text}
        </WagBadge>
      </WagBox>
    </WagCard>
);

function Example(args){
  

}

export const Default = Template.bind({});
Default.args = {
  text: 'Delivery Options',
  kind: "denim"
};

export const Standard_Denim = () => (
  <WagCard kind="blank">
      <WagBox width="200px" height="200px">
        <WagBadge>
          Delivery Options
        </WagBadge>
      </WagBox>
    </WagCard>
);

export const Standard_SkyBlue_Alt = () => (
  <WagCard kind="blank">
      <WagBox width="200px" height="200px">
        <WagBadge kind="sky">
          Delivery Options
        </WagBadge>
      </WagBox>
    </WagCard>
);

export const Standard_Warning = () => (
  <WagCard kind="blank">
      <WagBox width="200px" height="200px">
        <WagBadge kind="warning">
          Delivery Options
        </WagBadge>
      </WagBox>
    </WagCard>
);

export const Standard_Cream = () => (
  <WagCard kind="blank">
      <WagBox width="200px" height="200px">
        <WagBadge kind="creme">
          Delivery Options
        </WagBadge>
      </WagBox>
    </WagCard>
);

export const Standard_Error = () => (
  <WagCard kind="blank">
      <WagBox width="200px" height="200px">
        <WagBadge kind="error">
          Delivery Options
        </WagBadge>
      </WagBox>
    </WagCard>
);

export const Standard_Pickup = () => (
  <WagCard kind="blank">
      <WagBox width="200px" height="200px">
        <WagBadge kind="pickup">
          Delivery Options
        </WagBadge>
      </WagBox>
    </WagCard>
);




