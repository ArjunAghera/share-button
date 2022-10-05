import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Page } from "../components/Page";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Page>;

export const Primary: ComponentStory<typeof Page> = () => <Page />;
