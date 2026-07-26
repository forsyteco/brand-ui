import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { VisuallyHidden } from './visually-hidden';

const meta = {
  title: 'Utilities/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Visually hides content unless focused/active/focus-within. Useful for accessible labels and helper text.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="outline">
        <VisuallyHidden>Opens settings</VisuallyHidden>
        Settings
      </Button>
      <span className="text-base text-muted-foreground">
        The “Opens settings” text is hidden visually, but available to screen readers.
      </span>
    </div>
  ),
};


