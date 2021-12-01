import { propNames } from "@chakra-ui/react";
import React from "react";


import { WagLink } from "../components/Link/Link";
import { WagText } from "../components/Text/Text";
import { WagBox } from "../components/Box/Box";
import { WagCard } from "../components/Card/Card";


//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Link",
  component: WagLink,
   subcomponent: {  },
  argTypes: {
    // isExternal: { control: { type: "switch"}}
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
    // <WagText> 
    //   Click here to <WagLink kind={args.kind} href={args.href} isExternal={args.isExternal}>{args.text}</WagLink>.
    // </WagText>
    ExampleGenerator(args)
);

function ExampleGenerator(args){
  if(args.kind === ("default")){
    return(
      <WagLink
        href={args.href}
        isExternal={args.isExternal}
      >
        <WagCard>
          <WagText 
            kind="descriptor"
          >
            Default Link wrapped around card
          </WagText>
        </WagCard>
      </WagLink>
    );
  }
  if(args.kind === ("underline") ){
    return(
      <WagLink kind="underline" href={args.href} isExternal={args.isExternal}>{args.text}</WagLink>
    );

  }else{
    return(
      <WagText> 
        Click here to <WagLink kind={args.kind} href={args.href} isExternal={args.isExternal}>{args.text}</WagLink>.
      </WagText>
    );
  }

}

export const Default = Template.bind({});
Default.args = {
  kind:"default",
  text: "Refill Now",
  href:"https://walgreens.com"
};

export const General_Links = () => (
  <WagLink
    href="#!"
    isExternal
  >
    <WagCard>
      <WagText 
        kind="descriptor"
      >
        Default Link wrapped around card
      </WagText>
    </WagCard>
  </WagLink>
);

export const CTA = () => (
  <WagBox width="100%" orientation="column">
    <WagText>
      CTA(Call To Action) links should be straightforward that succinctly
      indicate the action a user can expect upon clicking them. All Links
      should be Sentence case and descriptive. Avoid vague language like
      "learn more", "Click here", "Get started".
    </WagText>
    <WagText>
      <WagLink 
        kind="CTA"
        href="#!"
        isExternal
      >
        Refill Now
      </WagLink>
      </WagText>
  </WagBox>
);

export const Inline = () => (
  <WagBox width="100%" orientation="column">
    <WagText>
      This component is used if there is text to the left and right of the
      link. This is a need for Accessibility. This is typically used within
      paragraph tags. If there is not text to the left or the right of the
      link, the designer should use the Link CTA, displayed above.
    </WagText>
    <WagText>
      <WagLink 
        kind="inline"
        href="#!"
        isExternal
      >
        Paragraph Link
      </WagLink>
    </WagText>
  </WagBox>
);

export const Underlined = () => (
  <WagBox width="100%" orientation="column">
    <WagText>
      This component is used in the uncommon case of when a link is needed
      to be underlined for the sake of Accessibility.
    </WagText>
      <WagLink 
        kind="underline"
        href="#!"
        isExternal
      >
        Standalone link
      </WagLink>
  </WagBox>
);

