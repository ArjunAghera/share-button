import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SmallProfileWidget } from "../components/SmallProfileWidget";

export default {
  title: "Component/SmallProfileWidget",
  component: SmallProfileWidget,
} as ComponentMeta<typeof SmallProfileWidget>;

const Template: ComponentStory<typeof SmallProfileWidget> = (args) => (
  <SmallProfileWidget {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "John Doe",
};
