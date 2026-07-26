import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A textarea component with error state support. Supports all standard textarea HTML attributes.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Number of rows',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the textarea has an error',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    rows: 4,
  },
};

export const Playground: Story = {
  args: {
    placeholder: 'Enter your message',
    rows: 4,
    error: false,
    disabled: false,
  },
};

