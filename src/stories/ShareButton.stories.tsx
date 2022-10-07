import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShareButton } from "../components/ShareButton";

export default {
  title: "Component/ShareButton",
  component: ShareButton,
} as ComponentMeta<typeof ShareButton>;

const Template: ComponentStory<typeof ShareButton> = (args) => (
  <ShareButton {...args} />
);

export const Dark = Template.bind({});
Dark.args = {
  color: "dark",
};

export const Light = Template.bind({});
Light.args = {
  color: "dark",
};
