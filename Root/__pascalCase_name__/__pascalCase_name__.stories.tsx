import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { {{pascalCase name}} as Component } from "./{{pascalCase name}}"
import { {{camelCase name}}MockProps } from "./{{pascalCase name}}.mockProps"

export default {
  title: `{{name}}`,
  component: Component,
} as ComponentMeta<typeof Component>

export const {{pascalCase name}}: ComponentStory<typeof Component> = () => (
  <Component {...{{camelCase name}}MockProps}>Text</Component>
)
