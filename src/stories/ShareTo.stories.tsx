import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShareTo } from "../components/ShareTo";

export default {
  title: "Component/ShareTo",
  component: ShareTo,
} as ComponentMeta<typeof ShareTo>;

export const Primary: ComponentStory<typeof ShareTo> = () => <ShareTo />;
