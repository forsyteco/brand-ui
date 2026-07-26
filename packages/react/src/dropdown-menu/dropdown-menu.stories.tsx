import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownMenu, DropdownMenuItem } from './dropdown-menu';
import { Button } from '../button';

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options.',
      },
    },
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
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu trigger={<Button>Open Menu</Button>}>
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
      <DropdownMenuItem>Item 3</DropdownMenuItem>
    </DropdownMenu>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <DropdownMenu {...args} trigger={<Button>Open Menu</Button>}>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Duplicate</DropdownMenuItem>
      <DropdownMenuItem disabled>Delete</DropdownMenuItem>
    </DropdownMenu>
  ),
  args: {
    align: 'right',
  },
};

