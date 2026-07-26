import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A loading spinner component with customizable size, stroke width, and colors. The spinner automatically cycles through provided colors.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 10, max: 200, step: 5 },
      description: 'Size of the spinner in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
    strokeWidth: {
      control: { type: 'number', min: 1, max: 20, step: 1 },
      description: 'Width of the spinner stroke',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    colors: {
      control: { type: 'object' },
      description: 'Array of colors to cycle through',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: "['#ffde13', '#b0b0b0', '#000000']" },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Playground: Story = {
  args: {
    size: 50,
    strokeWidth: 5,
    colors: ['#ffde13', '#b0b0b0', '#000000'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example with all controls. Adjust the props to see changes in real-time.',
      },
    },
  },
};
