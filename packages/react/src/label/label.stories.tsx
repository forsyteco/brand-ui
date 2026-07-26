import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from './label';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Compact badge-style label with neutral, semantic, and status variants for metadata and state chips.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'secondary',
        'ghost',
        'success',
        'severe',
        'danger',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    children: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const Playground: Story = {
  args: {
    children: 'Label',
    variant: 'default',
    size: 'default',
  },
};
