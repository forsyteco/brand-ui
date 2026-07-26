import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heart, Inbox, Bell, MessageSquare } from 'lucide-react';
import { Button } from './button';
import { Input } from '../input';

const meta = {
  title: 'Components/Button/Examples',
  component: Button,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormActions: Story = {
  render: () => (
    <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label htmlFor="form-actions-email" className="block text-base font-medium text-gray-700 mb-1">Email</label>
          <Input id="form-actions-email" type="email" placeholder="you@example.com" />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  ),
};

export const WithLeadingIcon: Story = {
  render: () => (
    <div className="p-6 flex gap-4">
      <Button>
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Item
      </Button>
      <Button variant="outline">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        View
      </Button>
    </div>
  ),
};

export const IconToolbar: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button icon={Heart} aria-label="Favorite" />
      <Button icon={Inbox} aria-label="Notifications" description="View notifications" />
      <Button icon={Bell} aria-label="Alerts" variant="primary" />
      <Button icon={MessageSquare} aria-label="Messages" variant="danger" />
    </div>
  ),
};

export const WithKeybindingHints: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button icon={Inbox} aria-label="Notifications" description="Open inbox" keybindingHint="G+I" />
      <Button icon={Bell} aria-label="Alerts" description="Open alerts" keybindingHint="G+A" />
    </div>
  ),
};
