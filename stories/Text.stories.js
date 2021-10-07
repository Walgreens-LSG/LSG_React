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
        type: 'radio',
      } 
    }
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  
  textGenerator(args)
);

function textGenerator(args){



  if(args.kind === ("PriceLarge" )){
    return(
      <WagText kind={args.kind}>
        <sup>$</sup>
        <span>10</span>
        <sup>99</sup>
      </WagText>
    );
  }
  if(args.kind === ("PriceMedium" )){
    return(
      <WagText kind={args.kind}>
        <sup>$</sup>
        <span>10</span>
        <sup>99</sup>
      </WagText>
    );
  }
  if(args.kind === ("PriceSmall" )){
    return(
      <WagText kind={args.kind}>
        $10.99
      </WagText>
    );
  }
  else{
    return(
      <WagText kind={args.kind}>{args.text}</WagText>
    );
  }
  
  
  
}


 
export const Default = Template.bind({});
Default.args = {
  text: 'Lorem Ipsum',
  kind: "Default"
};

// export const Multiple_Expanded = () => (
//   <WagAccordion 
//     allowMultiple
//   >
//     <WagAccordionItem>
//       <h2>
//         <WagAccordionButton>
//           Section 1 title
//         </WagAccordionButton>
//       </h2>
//       <WagAccordionPanel>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat.
//       </WagAccordionPanel>
//     </WagAccordionItem>

//     <WagAccordionItem>
//       <h2>
//         <WagAccordionButton>
//           Section 2 title
//         </WagAccordionButton>
//       </h2>
//       <WagAccordionPanel>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat.
//       </WagAccordionPanel>
//     </WagAccordionItem>
//   </WagAccordion>
// );

// export const Toggle_Enabled = () => (
//   <WagAccordion 
//     allowToggle
//   >
//     <WagAccordionItem>
//       <h2>
//         <WagAccordionButton>
//           Section 1 title
//         </WagAccordionButton>
//       </h2>
//       <WagAccordionPanel>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat.
//       </WagAccordionPanel>
//     </WagAccordionItem>

//     <WagAccordionItem>
//       <h2>
//         <WagAccordionButton>
//           Section 2 title
//         </WagAccordionButton>
//       </h2>
//       <WagAccordionPanel>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat.
//       </WagAccordionPanel>
//     </WagAccordionItem>
//   </WagAccordion>
// );
