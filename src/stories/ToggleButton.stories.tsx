import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToggleButton } from "../components/ToggleButton";

export default {
  title: "Example/ToggleButton",
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

export const Primary: ComponentStory<typeof ToggleButton> = () => (
  <ToggleButton />
);
