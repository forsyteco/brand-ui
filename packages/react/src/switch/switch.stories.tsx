import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A switch component for toggling boolean values. Built with Headless UI for accessibility.',
      },
    },
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the switch is checked',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text',
    },
    description: {
      control: { type: 'text' },
      description: 'Description text',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the switch is disabled',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        label="Enable notifications"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Playground: Story = {
  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked ?? false);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
  args: {
    label: 'Enable feature',
    description: 'Turn this feature on or off',
    checked: false,
    disabled: false,
  },
};

