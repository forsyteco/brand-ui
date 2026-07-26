import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';
import { Button } from '../button';
import { Input } from '../input';

const meta = {
  title: 'Components/Textarea/Examples',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactForm: Story = {
  render: () => (
    <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-base font-medium text-gray-700 mb-1">Name</label>
          <Input id="contact-name" type="text" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-base font-medium text-gray-700 mb-1">Email</label>
          <Input id="contact-email" type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-base font-medium text-gray-700 mb-1">Message</label>
          <Textarea id="contact-message" rows={6} placeholder="Enter your message..." />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  ),
};

export const FormWithValidation: Story = {
  render: () => (
    <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label htmlFor="validation-description" className="block text-base font-medium text-gray-700 mb-1">Description</label>
          <Textarea id="validation-description" rows={4} placeholder="Enter description..." error />
          <p className="mt-1 text-base text-red-600">
            Description must be at least 10 characters
          </p>
        </div>
      </form>
    </div>
  ),
};
