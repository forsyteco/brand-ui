import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';

const meta = {
  title: 'Components/Textarea/Features',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    error: {
      control: { type: 'boolean' },
      description: 'Whether the textarea has an error',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Number of rows',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Textarea placeholder="Small (2 rows)" rows={2} />
      <Textarea placeholder="Medium (4 rows)" rows={4} />
      <Textarea placeholder="Large (6 rows)" rows={6} />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Textarea placeholder="Normal textarea" />
      <Textarea placeholder="Disabled textarea" disabled />
      <Textarea placeholder="Error textarea" error />
      <Textarea placeholder="Readonly textarea" readOnly value="Readonly value" />
    </div>
  ),
};

