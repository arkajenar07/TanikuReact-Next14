import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

// Default export for Storybook meta configuration
const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories with specific args

export const TextInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text here',
  },
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const LargeInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Large input field',
  },
};

export const SmallInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Small input field',
  },
};

export const DisabledInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
};
