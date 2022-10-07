import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchModal } from "../components/SearchModal";

export default {
  title: "Component/SearchModal",
  component: SearchModal,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SearchModal>;

const profile = [
  {
    id: 1,
    userName: "John Doe",
    detail: "johndoe@sb.com",
    access: "Full access",
    type: "person",
  },
  {
    id: 2,
    userName: "Arjun Aghera",
    detail: "arjunagehra@sb.com",
    access: "Full access",
    type: "person",
  },
];

const Template: ComponentStory<typeof SearchModal> = (args) => (
  <SearchModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  profiles: profile,
};
