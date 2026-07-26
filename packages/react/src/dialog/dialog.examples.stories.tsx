import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from './dialog';
import { Button } from '../button';

const meta = {
  title: 'Components/Dialog/Examples',
  component: Dialog,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConfirmationDialog: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    return (
      <div className="p-6">
        <Button variant="destructive" onClick={() => setIsOpen(true)}>
          Delete Item
        </Button>
        {confirmed && <p className="mt-4 text-green-600">Item deleted!</p>}
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogPanel>
            <DialogTitle>Delete Item</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this item? This action cannot be undone.
            </DialogDescription>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  setConfirmed(true);
                  setIsOpen(false);
                }}
              >
                Delete
              </Button>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    );
  },
};

