import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "../components/Avatar";

export default {
  title: "Component/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Large = Template.bind({});
Large.args = {
  character: "A",
  size: "large",
  rounded: "full",
};

export const Small = Template.bind({});
Small.args = {
  character: "A",
  size: "small",
  rounded: "md",
};
