import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './spinner';
import { Button } from '../button';

const meta = {
  title: 'Components/Spinner/Examples',
  component: Spinner,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 10, max: 200, step: 5 },
      description: 'Size of the spinner in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
    strokeWidth: {
      control: { type: 'number', min: 1, max: 20, step: 1 },
      description: 'Width of the spinner stroke',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    colors: {
      control: { type: 'object' },
      description: 'Array of colors to cycle through',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: "['#ffde13', '#b0b0b0', '#000000']" },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-full max-w-md">
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Loading Content</h3>
        <div className="flex items-center justify-center py-12">
          <Spinner size={48} />
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <Spinner size={20} strokeWidth={3} />
          <span className="text-base text-gray-600">Processing...</span>
        </div>
      </div>
      <Button type="button" disabled className="gap-2">
        <Spinner size={16} strokeWidth={3} colors={['currentColor']} />
        <span>Submitting</span>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Spinner used in various UI contexts: cards, inline text, and buttons.',
      },
    },
  },
};

type LoadingState = 'initial' | 'loading' | 'done';

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const FullLifecycle: Story = {
  render: function Render() {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedContent, setLoadedContent] = useState('');

    let state: LoadingState = 'initial';
    if (isLoading) {
      state = 'loading';
    } else if (loadedContent) {
      state = 'done';
    }

    const initiateLoading = async () => {
      if (state === 'done') {
        return;
      }

      setIsLoading(true);
      await wait(2000);
      setLoadedContent('Some content that had to be loaded.');
      setIsLoading(false);
    };

    return (
      <>
        <Button type="button" onClick={initiateLoading} disabled={state === 'done'} className="mb-4">
          Load content
        </Button>
        {state === 'loading' && <Spinner />}
        {loadedContent && <p className="mt-4">{loadedContent}</p>}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {state === 'done' && 'Content finished loading'}
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Full lifecycle example showing initial, loading, and done states. Includes accessibility announcements when loading completes.',
      },
    },
  },
};

