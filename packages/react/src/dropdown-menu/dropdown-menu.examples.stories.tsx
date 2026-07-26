import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownMenu, DropdownMenuItem, DropdownMenuButton } from './dropdown-menu';
import { Button } from '../button';

const meta = {
  title: 'Components/DropdownMenu/Examples',
  component: DropdownMenu,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserMenu: Story = {
  render: () => (
    <div className="flex justify-end p-4">
      <DropdownMenu
        trigger={
          <Button variant="outline" className="flex items-center gap-2 rounded-lg">
            <span>John Doe</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        }
      >
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem disabled>Upgrade Plan</DropdownMenuItem>
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenu>
    </div>
  ),
};

export const ActionMenu: Story = {
  render: () => (
    <div className="p-4">
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Document</h3>
          <DropdownMenu trigger={<DropdownMenuButton>Actions</DropdownMenuButton>}>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem>Archive</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenu>
        </div>
        <p className="text-base text-gray-600">This is a sample document with an action menu.</p>
      </div>
    </div>
  ),
};

