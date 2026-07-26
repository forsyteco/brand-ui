import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta = {
  title: 'Components/Card/Examples',
  component: Card,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCard: Story = {
  render: () => (
    <div className="max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Forsyteco Starter</CardTitle>
          <CardDescription>Everything you need to get started quickly.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-base">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Projects</span>
              <span>Unlimited</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Support</span>
              <span>Standard</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Users</span>
              <span>10</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline">Learn more</Button>
          <Button>Choose plan</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const StatGrid: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        { label: 'Revenue', value: '$42,300' },
        { label: 'Active users', value: '1,284' },
        { label: 'Uptime', value: '99.98%' },
      ].map((stat) => (
        <Card key={stat.label}>
          <CardHeader>
            <CardDescription>{stat.label}</CardDescription>
            <CardTitle>{stat.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-10 rounded-md bg-muted" />
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};


