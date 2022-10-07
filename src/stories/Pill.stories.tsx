import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pill } from "../components/Pill";

export default {
  title: "Component/Pill",
  component: Pill,
} as ComponentMeta<typeof Pill>;

export const Primary: ComponentStory<typeof Pill> = () => (
  <Pill
    name="Arjun Aghera"
    setSelected={(string) => {}}
    setIsSelected={(boolean) => {}}
  />
);
