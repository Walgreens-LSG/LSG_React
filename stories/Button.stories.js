import { propNames } from "@chakra-ui/react";
import { WagPinIcon } from "../components/Icons/Pin";
import BeatLoader from "react-spinners/BeatLoader";
import React from "react";

import { WagButton } from "../components/Button/Button";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Button",
  component: WagButton,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // kind: { control: { type: 'radio' } }
  },
};

const WagPinIconProp = <WagPinIcon />;
const spinner = <BeatLoader size={8} color="white" />;

//👇 We create a “template” of how args map to rendering
const Template = (args) => <WagButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Action",
  kind: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  kind: "secondary",
};

export const Outline = Template.bind({});
Outline.args = {
  ...Primary.args,
  kind: "outline",
};

export const Link = Template.bind({});
Link.args = {
  children: "Action",
  kind: "link",
};

export const withLeftIcon = Template.bind({});
withLeftIcon.args = {
  ...Primary.args,
  leftIcon: WagPinIconProp,
};

export const withRightIcon = Template.bind({});
withRightIcon.args = {
  ...Primary.args,
  rightIcon: WagPinIconProp,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  isLoading: true,
  spinner: spinner,
};
