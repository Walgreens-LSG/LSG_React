import { propNames } from "@chakra-ui/react";
import { WagInfoIcon } from "../components/Icons/Info";
import { WagCheckCircleIcon } from "../components/Icons/CheckCircle";
import { WagAlertIcon } from "../components/Icons/Alert";
import { WagLinkCta } from "../components/Link/LinkCTA";
import { AlertDescription, CloseButton } from "@chakra-ui/react";
import React from "react";

import { WagAlert } from "../components/Alert/Alert";
import { WagAlertDescription } from "../components/Alert/AlertDescription";
import { WagCloseButton } from "../components/Alert/AlertCloseButton";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Alert",
  component: WagAlert,
  subcomponent: { WagAlertDescription },
  argTypes: {
    // backgroundColor: { control: 'color' },
    // kind: { control: { type: 'radio' } }
    // icon: {
    //   options: ["info", "success", "error"],
    //   mapping: {
    //     info: <WagInfoIcon />,
    //     success: <WagCheckCircleIcon />,
    //     error: <WagAlertIcon />,
    //   },
    // },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <WagAlert 
    kind={args.kind} 
  >
    {args.kind === "info" ? <WagInfoIcon /> : null}
    {args.kind === "success" ? <WagCheckCircleIcon /> : null}
    {args.kind === "error" ? <WagAlertIcon /> : null}
    {args.kind === "warning" ? <WagAlertIcon /> : null}
    {args.Description ? (
      <WagAlertDescription>
        {args.Description}
        {args.linkText ? <WagLinkCta>{args.linkText}</WagLinkCta> : null}
      </WagAlertDescription>
    ) : null}
    {args.dismissable ? (
      <WagCloseButton  />
    ) : null}
  </WagAlert>
);
export const Default = Template.bind({});
Default.args = {
  kind: "info",
  Description:
    "Information alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tortor.",
  linkText: "Refill now",
  dismissable: true,
};

export const Info = () => (
  <WagAlert kind="info"  >
    <WagInfoIcon />
    <WagAlertDescription>
      Information alert. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Duis et tortor.
      <WagLinkCta >Refill Now</WagLinkCta>
    </WagAlertDescription>
  </WagAlert>
);

export const Success = () => (
  <WagAlert kind="success" >
    <WagCheckCircleIcon />
    <WagAlertDescription>
      Success Alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis et tortor.
      <WagLinkCta>Check out</WagLinkCta>
    </WagAlertDescription>
    <WagCloseButton />
  </WagAlert>
);

export const Error = () => (
  <WagAlert kind="error" >
    <WagAlertIcon />
    <WagAlertDescription>
      Error Alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
      et tortor.
      <WagLinkCta>Check out</WagLinkCta>
    </WagAlertDescription>
    {/* <CloseButton position="absolute" right="8px" top="8px" size="sm" /> */}
  </WagAlert>
);

export const Warning = () => (
  <WagAlert kind="warning">
    <WagAlertIcon />
    <WagAlertDescription>
      Warning Alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis et tortor.
      <WagLinkCta>Check out</WagLinkCta>
    </WagAlertDescription>
    <WagCloseButton />
  </WagAlert>
);
