import { propNames } from "@chakra-ui/react";
import React from "react";



import { WagCard } from "../components/Card/Card"; 
import { WagText } from "../components/Text/Text";


//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Card",
  component: WagCard,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <WagCard></WagCard>
);

function Example(args){
  

}

export const Default = Template.bind({});
Default.args = {
 
};

// export const Example = () => (
//   <Wag
// );




