import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DetailedProfileWidget } from "../components/DetailedProfileWidget";

export default {
  title: "Example/DetailedProfileWidget",
  component: DetailedProfileWidget,
} as ComponentMeta<typeof DetailedProfileWidget>;

const Template: ComponentStory<typeof DetailedProfileWidget> = (args) => (
  <DetailedProfileWidget {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "John Doe",
  subtitle: "johndoe@sb.com",
};
