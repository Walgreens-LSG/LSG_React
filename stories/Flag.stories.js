import { propNames } from "@chakra-ui/react";
import React from "react";


import { WagFlag } from "../components/Badge/Flag";
import { WagCard } from "../components/Card/Card";
import { WagBox } from "../components/Box/Box";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Flag",
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

function Example(args){
  

}

export const Default = Template.bind({});
Default.args = {
  text: 'Due today',
  kind: "denim"
};

// export const Standard_Denim = () => (
//   <WagCard kind="blank">
//       <WagBox width="200px" height="200px">
//         <WagBadge>
//           Delivery Options
//         </WagBadge>
//       </WagBox>
//     </WagCard>
// );






