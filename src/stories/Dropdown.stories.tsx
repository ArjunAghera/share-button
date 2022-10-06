import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "../components/Dropdown";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  bgColor: "white",
  options: ["No access", "Full access", "Can View", "Can Edit"],
  selected: "No access",
};

export const Secondary = Template.bind({});
Secondary.args = {
  bgColor: "gray",
  options: ["No access", "Full access", "Can View", "Can Edit"],
  selected: "No access",
};
