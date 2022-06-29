import { render, screen } from "@testing-library/react"
import { {{pascalCase name}} } from "./{{pascalCase name}}"
import { {{camelCase name}}MockProps } from "./{{pascalCase name}}.mockProps"

describe(`{{pascalCase name}}`, () => {
  it(`renders the root`, () => {
    render(<{{pascalCase name}} {...{{camelCase name}}MockProps} />)
    expect(screen.getByTestId(`{{kebabCase name}}`)).toBeVisible()
  })

  it(`renders the children correctly`, () => {
    render(<{{pascalCase name}} {...{{camelCase name}}MockProps}>Hello world</{{pascalCase name}}>)
    expect(screen.getByText(`Hello world`)).toBeVisible()
  })
  
  it(`className default prop should be blank string`, () => {
    render(<{{pascalCase name}} {...{{camelCase name}}MockProps} />)
    expect(screen.getByTestId(`{{kebabCase name}}`)).not.toHaveClass(`undefined`)
  })
})
