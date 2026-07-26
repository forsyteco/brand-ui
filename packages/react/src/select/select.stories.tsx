import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './select';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A select component with error state support. Supports all standard select HTML attributes.',
      },
    },
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
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <Select options={options} placeholder="Select an option..." />
    </div>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <div className="w-64">
      <Select {...args} options={options} />
    </div>
  ),
  args: {
    placeholder: 'Select an option...',
    error: false,
    disabled: false,
  },
};

