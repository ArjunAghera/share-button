import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../components/Input";

export default {
  title: "Example/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithoutDropdown = Template.bind({});
WithoutDropdown.args = {
  placeholder: "Enter your text here",
  withDropdown: false,
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  placeholder: "Enter your text here",
  withDropdown: true,
};
