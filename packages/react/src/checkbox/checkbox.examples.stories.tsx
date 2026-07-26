import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';

const meta = {
  title: 'Components/Checkbox/Examples',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SettingsForm: Story = {
  render: function Render() {
    const [settings, setSettings] = useState({
      email: true,
      push: false,
      sms: false,
    });

    return (
      <div className="p-6 max-w-md">
        <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <Checkbox
            label="Email notifications"
            checked={settings.email}
            onChange={(e) => setSettings({ ...settings, email: e.target.checked })}
          />
          <Checkbox
            label="Push notifications"
            checked={settings.push}
            onChange={(e) => setSettings({ ...settings, push: e.target.checked })}
          />
          <Checkbox
            label="SMS notifications"
            checked={settings.sms}
            onChange={(e) => setSettings({ ...settings, sms: e.target.checked })}
          />
        </div>
      </div>
    );
  },
};

