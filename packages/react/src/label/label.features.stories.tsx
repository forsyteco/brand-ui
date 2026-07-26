import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from './label';

const meta = {
  title: 'Components/Label/Features',
  component: Label,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Label variant="default">Default</Label>,
};

export const Primary: Story = {
  render: () => <Label variant="primary">Primary</Label>,
};

export const Secondary: Story = {
  render: () => <Label variant="secondary">Secondary</Label>,
};

export const Ghost: Story = {
  render: () => <Label variant="ghost">Ghost</Label>,
};

export const Success: Story = {
  render: () => <Label variant="success">Success</Label>,
};

export const Severe: Story = {
  render: () => <Label variant="severe">Severe</Label>,
};

export const Danger: Story = {
  render: () => <Label variant="danger">Danger</Label>,
};

export const SizeSmall: Story = {
  render: () => <Label size="sm">Small</Label>,
};

export const SizeLarge: Story = {
  render: () => <Label size="lg">Large</Label>,
};
