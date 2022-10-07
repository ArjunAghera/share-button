import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WidgetFooter } from "../components/WidgetFooter";

export default {
  title: "Component/WidgetFooter",
  component: WidgetFooter,
} as ComponentMeta<typeof WidgetFooter>;

const Template: ComponentStory<typeof WidgetFooter> = (args) => (
  <WidgetFooter {...args} />
);

export const WithCopyLink = Template.bind({});
WithCopyLink.args = {
  withCopyLink: true,
};

export const WithoutCopyLink = Template.bind({});
WithoutCopyLink.args = {
  withCopyLink: false,
};
