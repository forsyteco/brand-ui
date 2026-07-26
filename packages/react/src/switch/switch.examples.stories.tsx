import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';

const meta = {
  title: 'Components/Switch/Examples',
  component: Switch,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationSettings: Story = {
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
          <Switch
            label="Email notifications"
            description="Receive updates via email"
            checked={settings.email}
            onChange={(checked) => setSettings({ ...settings, email: checked })}
          />
          <Switch
            label="Push notifications"
            description="Get notified on your device"
            checked={settings.push}
            onChange={(checked) => setSettings({ ...settings, push: checked })}
          />
          <Switch
            label="SMS notifications"
            description="Receive text message updates"
            checked={settings.sms}
            onChange={(checked) => setSettings({ ...settings, sms: checked })}
          />
        </div>
      </div>
    );
  },
};

