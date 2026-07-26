import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';

const meta = {
  title: 'Components/Switch/Features',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the switch is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the switch is disabled',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text',
    },
    description: {
      control: { type: 'text' },
      description: 'Description text',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch label="Unchecked" />
      <Switch label="Checked" checked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled Checked" disabled checked />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch
        label="Email notifications"
        description="Receive email updates about your account"
      />
      <Switch
        label="Push notifications"
        description="Get notified on your device"
        checked
      />
    </div>
  ),
};

export const Controlled: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        label="Controlled switch"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

