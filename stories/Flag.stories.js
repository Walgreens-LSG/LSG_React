import { propNames } from "@chakra-ui/react";
import React from "react";


import { WagFlag } from "../components/Badge/Flag";
import { WagCard } from "../components/Card/Card";
import { WagBox } from "../components/Box/Box";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Badge/Flag",
  component: WagFlag,
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
      <WagBox width="400px" height="300px">
        <WagFlag
          kind={args.kind}
        >
          {args.text}
        </WagFlag>
      </WagBox>
    </WagCard>
);


export const Default = Template.bind({});
Default.args = {
  text: 'Due today',
  kind: "denim"
};

export const Denim_Flag = () => (
  <WagCard kind="blank">
      <WagBox width="400px" height="200px">
        <WagFlag
          kind="denim"
        >
          Pickup today
        </WagFlag>
      </WagBox>
    </WagCard>
);
export const Sky_Flag = () => (
  <WagCard kind="blank">
      <WagBox width="400px" height="200px">
        <WagFlag
          kind="sky"
        >
          Pickup today
        </WagFlag>
      </WagBox>
    </WagCard>
);
export const Warning_Flag = () => (
  <WagCard kind="blank">
      <WagBox width="400px" height="200px">
        <WagFlag
          kind="warning"
        >
          Pickup today
        </WagFlag>
      </WagBox>
    </WagCard>
);
export const Creme_Flag = () => (
  <WagCard kind="blank">
      <WagBox width="400px" height="200px">
        <WagFlag
          kind="creme"
        >
          Pickup today
        </WagFlag>
      </WagBox>
    </WagCard>
);
export const Error_Flag = () => (
  <WagCard kind="blank">
      <WagBox width="400px" height="200px">
        <WagFlag
          kind="error"
        >
          Pickup today
        </WagFlag>
      </WagBox>
    </WagCard>
);
export const Pickup_Flag = () => (
  <WagCard kind="blank">
      <WagBox width="400px" height="200px">
        <WagFlag
          kind="pickup"
        >
          Pickup today
        </WagFlag>
      </WagBox>
    </WagCard>
);





