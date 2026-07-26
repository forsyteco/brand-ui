import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Avatar primitive with image and fallbacks (initials or boring avatar).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage alt="Avatar" />
      <AvatarFallback variant="initials" name="Ada Lovelace" />
    </Avatar>
  ),
};

export const Playground: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
      <Avatar>
        <AvatarFallback variant="boring" name="Grace Hopper" />
      </Avatar>
      <Avatar className="size-12">
        <AvatarFallback variant="boring" name="Alan Turing" />
      </Avatar>
    </div>
  ),
};


