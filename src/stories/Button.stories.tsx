import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Button } from '../components/Button'

export default {
  title: `components`,
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '20px' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Button>

export const button: ComponentStoryObj<typeof Button> = {
  args: {
    children: 'ボタンです',
    colorScheme: 'red',
    onClick: () => {},
    disabled: true
  }
}
