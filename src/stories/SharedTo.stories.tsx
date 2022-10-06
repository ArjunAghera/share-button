import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SharedTo } from "../components/SharedTo";

export default {
  title: "Example/SharedTo",
  component: SharedTo,
} as ComponentMeta<typeof SharedTo>;

const Template: ComponentStory<typeof SharedTo> = (args) => (
  <SharedTo {...args} />
);

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

export const Primary = Template.bind({});
Primary.args = {
  profiles: profile,
};
