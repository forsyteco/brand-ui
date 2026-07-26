import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from './dialog';
import { Button } from '../button';
import { Input } from '../input';
import { Textarea } from '../textarea';

const meta = {
  title: 'Components/Dialog/Features',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Whether the dialog is open',
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogPanel>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to proceed? This action cannot be undone.
            </DialogDescription>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </div>
          </DialogPanel>
        </Dialog>
      </>
    );
  },
};

export const WithForm: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Form Dialog
        </Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogPanel>
            <DialogTitle>Create New Item</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new item.
            </DialogDescription>
            <form className="mt-4 space-y-4">
              <div>
                <label htmlFor="dialog-item-name" className="block text-base font-medium text-gray-700">Name</label>
                <Input id="dialog-item-name" type="text" className="mt-1" placeholder="Item name" />
              </div>
              <div>
                <label htmlFor="dialog-item-description" className="block text-base font-medium text-gray-700">Description</label>
                <Textarea id="dialog-item-description" className="mt-1" rows={3} placeholder="Describe the item" />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" onClick={() => setIsOpen(false)}>
                  Create
                </Button>
              </div>
            </form>
          </DialogPanel>
        </Dialog>
      </>
    );
  },
};

