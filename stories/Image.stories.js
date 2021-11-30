import { propNames } from "@chakra-ui/react";
import React from "react";



import { WagImage} from "../components/Image/Image";


//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Image",
  component: WagImage,
   subcomponent: {  },
  argTypes: {
    borderRadius: {
      control:{
        type: 'check'
      }
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <WagImage 
      src={args.src}
      alt={args.alt}
      borderRadius={args.borderRadius}
      fallbackSrc={args.fallbackSrc}
      boxSize={args.boxSize}
    />
);

export const Default = Template.bind({});
Default.args = {
  fallbackSrc:"https://images.unsplash.com/photo-1637675199609-f924f55cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  src:"https://images.unsplash.com/photo-1637675199609-f924f55cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  alt:"Winter Cabins covered in Snow"
};

// export const Example = () => (
//   <Wag
// );




