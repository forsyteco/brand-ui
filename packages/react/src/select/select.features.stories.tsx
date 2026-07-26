import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './select';

const meta = {
  title: 'Components/Select/Features',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the select has an error',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export const Basic: Story = {
  render: () => (
    <div className="w-64">
      <Select options={options} placeholder="Select an option..." />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Select options={options} placeholder="Normal" />
      <Select options={options} placeholder="Disabled" disabled />
      <Select options={options} placeholder="Error" error />
    </div>
  ),
};

export const WithDisabledOptions: Story = {
  render: () => (
    <div className="w-64">
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2', disabled: true },
          { value: '3', label: 'Option 3' },
        ]}
        placeholder="Select..."
      />
    </div>
  ),
};

