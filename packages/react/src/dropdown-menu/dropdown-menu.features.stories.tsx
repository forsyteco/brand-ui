import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownMenu, DropdownMenuItem, DropdownMenuButton } from './dropdown-menu';
import { Button } from '../button';

const meta = {
  title: 'Components/DropdownMenu/Features',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Alignment of the dropdown menu',
      table: {
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: "'right'" },
      },
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alignments: Story = {
  render: () => (
    <div className="flex gap-8">
      <div className="flex flex-col items-center gap-2">
        <DropdownMenu trigger={<Button>Left Aligned</Button>} align="left">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenu>
        <span className="text-xs text-gray-600">Left</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DropdownMenu trigger={<Button>Right Aligned</Button>} align="right">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenu>
        <span className="text-xs text-gray-600">Right</span>
      </div>
    </div>
  ),
};

export const WithMenuButton: Story = {
  render: () => (
    <DropdownMenu trigger={<DropdownMenuButton>Options</DropdownMenuButton>}>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Duplicate</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenu>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <DropdownMenu trigger={<Button>Menu</Button>}>
      <DropdownMenuItem>Enabled Item</DropdownMenuItem>
      <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
      <DropdownMenuItem>Another Enabled Item</DropdownMenuItem>
    </DropdownMenu>
  ),
};

