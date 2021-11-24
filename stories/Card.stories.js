import { propNames } from "@chakra-ui/react";
import React from "react";



import { WagCard } from "../components/Card/Card";
import { WagImage } from "../components/Image/Image";
import { WagBox } from "../components/Box/Box";
import { WagText } from "../components/Text/Text";
import { WagTextSpan } from "../components/Text/Text_Span";
import { WagButton } from "../components/Button/Button";


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



export const Default = Template.bind({});
Default.args = {
 
};

export const Product_Card = () => (
  <WagCard>
    <WagBox orientation="column" width="215px">
      <WagImage 
        src="https://images.unsplash.com/photo-1620101680143-9c4d8b717826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        fallbackSrc="https://images.unsplash.com/photo-1620101680143-9c4d8b717826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        alt="Tech Accessories"
        boxSize="215px"
      />
      <WagText kind="descriptor">Chicken of the Sea</WagText>
      <WagText kind="descriptor">
        <strong>Chunk Light Tuna in Water</strong> - 5 oz
      </WagText>
      <WagText kind="priceSmall">$1.00</WagText>
      <WagText kind="descriptor">
        <WagTextSpan color="seasonalGreen">
          <strong>In stock</strong>
        </WagTextSpan> at 9810 APOLLO DRIVE for Pickup or Same Day Delivery
      </WagText>
      <WagText kind="descriptor">Not available for shipping</WagText>
      <WagButton>Add to Cart</WagButton>
    </WagBox>
  </WagCard>
);




