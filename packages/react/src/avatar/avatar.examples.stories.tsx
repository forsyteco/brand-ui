import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card, CardContent, CardHeader, CardTitle } from '../card';
import { Avatar, AvatarFallback } from './avatar';

const meta = {
  title: 'Components/Avatar/Examples',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MemberList: Story = {
  render: () => (
    <div className="max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Team</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {['Ada Lovelace', 'Grace Hopper', 'Alan Turing'].map((name) => (
            <div key={name} className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback variant="boring" name={name} />
              </Avatar>
              <div className="text-base">{name}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  ),
};


