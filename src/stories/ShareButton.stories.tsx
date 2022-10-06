import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShareButton } from "../components/ShareButton";

export default {
  title: "Example/ShareButton",
  component: ShareButton,
} as ComponentMeta<typeof ShareButton>;

export const Primary: ComponentStory<typeof ShareButton> = () => (
  <ShareButton />
);
