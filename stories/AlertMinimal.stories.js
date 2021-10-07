import { propNames } from "@chakra-ui/react";
import { WagInfoIcon } from "../components/Icons/Info";
import { WagCheckCircleIcon } from "../components/Icons/CheckCircle";
import { WagAlertIcon } from "../components/Icons/Alert";
import { WagLinkCta } from "../components/Link/LinkCTA";
import { AlertDescription, CloseButton } from "@chakra-ui/react";
import React from "react";

import { WagAlertMinimal } from "../components/Alert/AlertMinimal";
import { WagAlertDescription } from "../components/Alert/AlertDescription";
import { WagCloseButton } from "../components/Alert/AlertCloseButton";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/ Alert Minimal",
  component: WagAlertMinimal, 
  subcomponent: { WagAlertDescription },
  
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <WagAlertMinimal kind={args.kind} >
    {args.kind === "info" ? <WagInfoIcon /> : null}
    {args.kind === "success" ? <WagCheckCircleIcon /> : null}
    {args.kind === "error" ? <WagAlertIcon /> : null}
    {args.kind === "warning" ? <WagAlertIcon /> : null}
    {args.Description ? (
      <WagAlertDescription >
        {args.Description}
        {args.linkText ? <WagLinkCta >{args.linkText}</WagLinkCta> : null}
      </WagAlertDescription>
    ) : null}
    {args.dismissable ? (
      <WagCloseButton />
    ) : null }
  </WagAlertMinimal>
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
  <WagAlertMinimal kind="info" >
    <WagInfoIcon />
    <WagAlertDescription >
      Information alert. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Duis et tortor.
      <WagLinkCta >Refill Now</WagLinkCta>
    </WagAlertDescription>
  </WagAlertMinimal>
);

export const Success = () => (
  <WagAlertMinimal kind="success" >
    <WagCheckCircleIcon />
    <WagAlertDescription >
      Success Alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis et tortor.
      <WagLinkCta >Check out</WagLinkCta>
    </WagAlertDescription>
    <WagCloseButton />
  </WagAlertMinimal>
);

export const Error = () => (
  <WagAlertMinimal kind="error" >
    <WagAlertIcon />
    <WagAlertDescription >
      Error Alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
      et tortor.
      <WagLinkCta >Check out</WagLinkCta>
    </WagAlertDescription>
  </WagAlertMinimal>
);

export const Warning = () => (
  <WagAlertMinimal kind="warning" >
    <WagAlertIcon />
    <WagAlertDescription >
      Warning Alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis et tortor.
      <WagLinkCta >Check out</WagLinkCta>
    </WagAlertDescription>
    <WagCloseButton />
  </WagAlertMinimal>
);
