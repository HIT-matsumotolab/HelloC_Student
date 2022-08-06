import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Test } from '../components/test'

export default {
  title: `test`,
  component: Test,
  decorators: [
    (Story) => (
      <div style={{ width: '1000px', margin: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Test>

export const projectOrderDialog: ComponentStoryObj<typeof Test> = {}
