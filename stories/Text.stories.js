import { propNames } from "@chakra-ui/react";
import { WagInfoIcon } from "../components/Icons/Info";
import React from "react";


import { WagText } from "../components/Text/Text";



//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Text",
  component: WagText,
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
  
  textGenerator(args)
);

function textGenerator(args){
  // This function determines what variation of the
  //text will render based on text type
  if(args.kind === ("PriceLarge" )){
    return(
      <WagText 
        kind={args.kind}
        color={args.color}
      >
        <sup>$</sup>
        <span>10</span>
        <sup>99</sup>
      </WagText>
    );
  }
  if(args.kind === ("PriceMedium" )){
    return(
      <WagText 
        kind={args.kind}
        color={args.color}
      >
        <sup>$</sup>
        <span>10</span>
        <sup>99</sup>
      </WagText>
    );
  }
  if(args.kind === ("PriceSmall" )){
    return(
      <WagText 
        kind={args.kind}
        color={args.color}
      >
        $10.99
      </WagText>
    );
  }
  else{
    return(
      <WagText 
        kind={args.kind} 
        color={args.color}
      >
        {args.text}
      </WagText>
    );
  }

}


 
export const Default = Template.bind({});
Default.args = {
  text: 'Lorem Ipsum',
  kind: "paragraph",
  color: "textGray"
};

// export const Multiple_Expanded = () => (
//   
// );


