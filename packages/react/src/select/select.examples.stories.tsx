import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './select';

const meta = {
  title: 'Components/Select/Examples',
  component: Select,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CountrySelect: Story = {
  render: () => (
    <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label htmlFor="country-select-example" className="block text-base font-medium text-gray-700 mb-1">
            Country
          </label>
          <Select
            id="country-select-example"
            options={[
              { value: 'us', label: 'United States' },
              { value: 'uk', label: 'United Kingdom' },
              { value: 'ca', label: 'Canada' },
              { value: 'au', label: 'Australia' },
            ]}
            placeholder="Select a country..."
          />
        </div>
        <div>
          <label htmlFor="state-select-example" className="block text-base font-medium text-gray-700 mb-1">
            State/Province
          </label>
          <Select
            id="state-select-example"
            options={[
              { value: 'ny', label: 'New York' },
              { value: 'ca', label: 'California' },
              { value: 'tx', label: 'Texas' },
            ]}
            placeholder="Select a state..."
          />
        </div>
      </form>
    </div>
  ),
};

