import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skeleton } from './skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A lightweight skeleton loader primitive.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-48" />,
};

export const Playground: Story = {
  args: {},
  render: () => (
    <div className="grid gap-3">
      <Skeleton className="h-4 w-56" />
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-64" />
    </div>
  ),
};


