import { propNames } from "@chakra-ui/react";
import { WagInfoIcon } from "../components/Icons/Info";
import React from "react";


import { WagText } from "../components/Text/Text";
import { WagTextSpan } from "../components/Text/Text_Span";



//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Text/Text",
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
  if(args.kind === ("priceLarge" )){
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
  if(args.kind === ("priceMedium" )){
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
  if(args.kind === ("priceSmall" )){
    return(
      <WagText 
        kind={args.kind}
        color={args.color}
      >
        $10.99
      </WagText>
    );
  }
  if(args.truncated){
    return(
      <WagText
        kind={args.kind}
        color={args.color}
        as={args.element}
        isTruncated
      >
        {args.text}
      </WagText>
    );
  }
  else{
    return(
      
      <WagText 
        kind={args.kind} 
        color={args.color}
        as={args.element}
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
  color: "textGray",
  truncated: false,
  element: 's'
};


export const Paragraph_Text = () => (
  <WagText kind="paragraph" color="textGray">
     CDC recommends a Pfizer-BioNTech booster shot at least 6 months 
     after completion of the primary series for adults 65+ and certain 
     at-risk individuals ages 18+.
  </WagText>
);

export const Paragraph_With_Span_Text = () => (
  <WagText kind="paragraph" color="textGray">
     CDC recommends a <WagTextSpan color="denim">
     Pfizer-BioNTech </WagTextSpan> booster shot at least 6 months 
     after completion of the primary series for adults 65+ and certain 
     at-risk individuals ages 18+.
  </WagText>
);

export const Descriptor_Text = () => (
  <WagText kind="descriptor" color="textGray">
     Search your nearest 24-hour store, drive-thru pharmacy, photo lab 
     and more.
  </WagText>
);

export const Disclaimer_Text = () => (
  <WagText kind="disclaimer" color="gray">
     Walgreens will honor the lowest price posted on the sales floor for 
     in-store purchases, regardless of time limitations on the sales floor; 
     internet advertised prices excluded as internet price may differ from 
     in-store price.
  </WagText>
);
export const Large_Price_Text = () => (
  <WagText kind="priceLarge" color="walgreensRed">
     <sup>$</sup>
     <span>9</span>
     <sup>99</sup>
  </WagText>
);
export const Medium_Price_Text = () => (
  <WagText kind="priceMedium" color="walgreensRed">
     <sup>$</sup>
     <span>9</span>
     <sup>99</sup>
  </WagText>
);

export const Small_Price_Text = () => (
  <WagText kind="priceSmall" color="walgreensRed">
     $10.99
  </WagText>
);

