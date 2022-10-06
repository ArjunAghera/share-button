import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShareModal } from "../components/ShareModal";

export default {
  title: "Example/ShareModal",
  component: ShareModal,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ShareModal>;

export const Primary: ComponentStory<typeof ShareModal> = () => <ShareModal />;
