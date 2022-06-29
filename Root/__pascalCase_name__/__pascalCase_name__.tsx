import { Component } from "@/types"

export interface Props extends Component {}

export function {{pascalCase name}}({ testId = `{{kebabCase name}}`, className=`` }: Props) {
  return <div className={className} data-testid={testId}>{{lowerCase name}}</div>
}
