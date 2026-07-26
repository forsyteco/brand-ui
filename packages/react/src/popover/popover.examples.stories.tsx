import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

const meta = {
  title: 'Components/Popover/Examples',
  component: Popover,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoPopover: Story = {
  render: () => (
    <div className="p-6">
      <div className="flex items-center gap-2">
        <span className="text-base font-medium">Total Revenue</span>
        <Popover>
          <PopoverTrigger className="p-1">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-base text-gray-600">
              Total revenue includes all sales from the current period, including refunds and discounts.
            </p>
          </PopoverContent>
        </Popover>
      </div>
      <p className="mt-2 text-2xl font-bold">$45,231</p>
    </div>
  ),
};

