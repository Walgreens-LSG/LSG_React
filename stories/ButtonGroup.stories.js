import React from "react";
// import { ButtonGroup, useStyleConfig } from "@chakra-ui/react";
import { WagButtonGroup } from "../components/Button/ButtonGroup";
import { WagButton } from "../components/Button/Button";
import {
  withKnobs,
  text,
  boolean,
  radios,
  number,
  array,
} from "@storybook/addon-knobs";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Buttons/Button Group",
  component: WagButtonGroup,
  subcomponent: WagButton,
  decorators: [withKnobs],
  argTypes: {
    kind: {
      control: {
        type: "inline-radio",
        options: ["primary", "link", "secondary", "outline"],
      },
    },
    kindSecondary: {
      control: {
        type: "inline-radio",
        options: ["primary", "link", "secondary", "outline"],
      },
    },
  },
};

// Knobs as dynamic variables.
// export const asDynamicVariables = () => {
//   const titleOne = text("Text", "Primary");
//   const kindOne = text("kind", "primary");
//   const titleTwo = text("Text Secondary", "Secondary");
//   const optionsTwo = {
//     Primary: "primary",
//     Secondary: "secondary",
//     Outline: "outline",
//     link: "link",
//   };
//   const defaultValueTwo = "link";
//   const value = radios(titleTwo, optionsTwo, defaultValueTwo);
//   const buttonOne = (
//     <WagButton kind={kindOne} isFullWidth={boolean("isFullWidth", false)}>
//       {titleOne}
//     </WagButton>
//   );
//   const buttonTwo = (
//     <WagButton kind={value} isFullWidth={boolean("isFullWidth", false)}>
//       {titleTwo}
//     </WagButton>
//   );

//   return (
//     <WagButtonGroup isFullWidth={boolean("isFullWidth", false)}>
//       {buttonOne}
//       {buttonTwo}
//     </WagButtonGroup>
//   );
// };
//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <WagButtonGroup isFullWidth={args.isFullWidth ? true : false}>
    <WagButton isFullWidth={args.isFullWidth ? true : false} kind={args.kind}>
      {args.title}
    </WagButton>
    <WagButton
      isFullWidth={args.isFullWidth ? true : false}
      kind={args.kindSecondary}
    >
      {args.titleTwo}
    </WagButton>
  </WagButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
  isFullWidth: false,
  kind: "primary",
  title: "Primary",
  kindSecondary: "link",
  titleTwo: "Secondary",
};

export const DefaultReverse = () => (
  <WagButtonGroup>
    <WagButton kind="link">Secondary</WagButton>
    <WagButton kind="primary">Primary</WagButton>
  </WagButtonGroup>
);

export const Alternate = () => (
  <WagButtonGroup>
    <WagButton kind="primary">Primary</WagButton>
    <WagButton kind="outline">Secondary</WagButton>
  </WagButtonGroup>
);

export const AlternateReverse = () => (
  <WagButtonGroup>
    <WagButton kind="outline">Secondary</WagButton>
    <WagButton kind="primary">Primary</WagButton>
  </WagButtonGroup>
);

export const MultipleSelector = () => (
  <WagButtonGroup spacing="4">
    <WagButton kind="outline">Action</WagButton>
    <WagButton kind="outline">Action</WagButton>
    <WagButton kind="outline">Action</WagButton>
  </WagButtonGroup>
);

export const MultipleSelectorSelected = () => (
  <WagButtonGroup spacing="4">
    <WagButton kind="outline">Action</WagButton>
    <WagButton kind="selected">Action</WagButton>
    <WagButton kind="outline">Action</WagButton>
  </WagButtonGroup>
);
