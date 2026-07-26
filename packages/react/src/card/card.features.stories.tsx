import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta = {
  title: 'Components/Card/Features',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHeaderAction: Story = {
  render: () => (
    <Card className="w-[420px]">
      <CardHeader className="border-b border-border">
        <div>
          <CardTitle>Team settings</CardTitle>
          <CardDescription>Manage your team configuration.</CardDescription>
        </div>
        <CardAction>
          <Button size="sm" variant="outline">
            Edit
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 text-base">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Members</span>
            <span className="text-foreground">12</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Plan</span>
            <span className="text-foreground">Pro</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-border justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardContent>
        <p className="text-base text-foreground">A minimal card with only content.</p>
      </CardContent>
    </Card>
  ),
};


