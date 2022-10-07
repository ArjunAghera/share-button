import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";

export default {
  title: "Component/Button",
  component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "dark",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "light",
  label: "Button",
};
