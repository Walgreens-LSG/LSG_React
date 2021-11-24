import { propNames } from "@chakra-ui/react";
import React from "react";



import { WagLink } from "../components/Link/Link";
import { WagText } from "../components/Text/Text";


//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Link",
  component: WagLink,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <WagLink
      kind={args.kind}
      href={args.href}
      isExternal={args.isExternal}
    >
      Test
    </WagLink>
);

// function Example(args){
  

// }

export const Default = Template.bind({});
Default.args = {
  kind:"CTA"
};

// export const Example = () => (
//   <Wag
// );




