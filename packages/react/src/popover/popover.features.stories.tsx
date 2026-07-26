import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from '../button';
import { Input } from '../input';

const meta = {
  title: 'Components/Popover/Features',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverContent>
        <h3 className="text-base font-medium text-gray-900 mb-2">Popover Title</h3>
        <p className="text-base text-gray-600">This is the popover content.</p>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>Filter</PopoverTrigger>
      <PopoverContent>
        <form className="space-y-4">
          <div>
            <label htmlFor="popover-filter-status" className="block text-base font-medium text-gray-700">Status</label>
            <select id="popover-filter-status" className="mt-1 block w-full rounded-md border-gray-300">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label htmlFor="popover-filter-date" className="block text-base font-medium text-gray-700">Date Range</label>
            <Input id="popover-filter-date" type="date" className="mt-1" />
          </div>
          <Button type="submit" className="w-full">
            Apply
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  ),
};

