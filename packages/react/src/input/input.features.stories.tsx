import type { Meta, StoryObj } from '@storybook/react-vite';
import { Eye, Search } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';

import { Label } from '../label';
import formFieldStyles from '../form-field/form-field.module.css';
import { FormField } from '../form-field';
import { Spinner } from '../spinner';
import { VisuallyHidden } from '../visually-hidden';
import { Input } from './input';
import { InputFeatureLayout, InputLabelHelpPopover } from './input.story-helpers';

const meta = {
  title: 'Components/Input/Features',
  component: Input,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <InputFeatureLayout className="w-full max-w-md">
      <FormField>
        <FormField.Label>Full width</FormField.Label>
        <FormField.Control>
          <Input placeholder="Spans the container" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
  ),
};

export const Disabled: Story = {
  render: () => (
    <InputFeatureLayout>
      <Input disabled placeholder="Disabled input" aria-label="Disabled input" />
    </InputFeatureLayout>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <InputFeatureLayout>
      <Input error defaultValue="Invalid value" aria-label="Error input" />
    </InputFeatureLayout>
  ),
};

export const Large: Story = {
  render: () => (
    <InputFeatureLayout>
      <Input size="lg" placeholder="Large input" aria-label="Large input" />
    </InputFeatureLayout>
  ),
};

export const Required: Story = {
  render: () => (
    <InputFeatureLayout>
      <FormField>
        <FormField.Label required>Username</FormField.Label>
        <FormField.Control>
          <Input required placeholder="Required field" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
  ),
};

export const Small: Story = {
  render: () => (
    <InputFeatureLayout>
      <Input size="sm" placeholder="Small input" aria-label="Small input" />
    </InputFeatureLayout>
  ),
};

export const Success: Story = {
  render: () => (
    <InputFeatureLayout>
      <Input success defaultValue="Valid value" aria-label="Success input" />
    </InputFeatureLayout>
  ),
};

export const VisuallyHiddenLabel: Story = {
  render: () => (
    <InputFeatureLayout>
      <FormField>
        <FormField.Label>
          <VisuallyHidden>Search</VisuallyHidden>
        </FormField.Label>
        <FormField.Control>
          <Input placeholder="Label is visually hidden" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
  ),
};

export const WithAutocompleteAttribute: Story = {
  render: () => (
    <InputFeatureLayout>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Control>
          <Input type="email" autoComplete="email" placeholder="you@example.com" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <InputFeatureLayout>
      <FormField>
        <FormField.Label>Display name</FormField.Label>
        <FormField.Description>Visible on your public profile.</FormField.Description>
        <FormField.Control describedBy="description">
          <Input placeholder="Jane Doe" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
  ),
};

export const WithCharacterLimit: Story = {
  render: function Render() {
    const [value, setValue] = useState('');
    const maxLength = 50;

    return (
      <InputFeatureLayout>
        <FormField>
          <FormField.LabelRow>
            <FormField.Label>Bio</FormField.Label>
            <FormField.LabelActions>
              <Label>{`${value.length}/${maxLength}`}</Label>
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Control>
            <Input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              maxLength={maxLength}
              placeholder="Tell us about yourself"
            />
          </FormField.Control>
        </FormField>
      </InputFeatureLayout>
    );
  },
};

export const WithCharacterLimitAndCaption: Story = {
  render: function Render() {
    const [value, setValue] = useState('');
    const maxLength = 50;

    return (
      <InputFeatureLayout>
        <FormField>
          <FormField.LabelRow>
            <FormField.Label>Bio</FormField.Label>
            <FormField.LabelActions>
              <Label>{`${value.length}/${maxLength}`}</Label>
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Description>Keep it short and friendly.</FormField.Description>
          <FormField.Control describedBy="description">
            <Input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              maxLength={maxLength}
              placeholder="Tell us about yourself"
            />
          </FormField.Control>
        </FormField>
      </InputFeatureLayout>
    );
  },
};

export const WithCharacterLimitExceeded: Story = {
  render: function Render() {
    const maxLength = 10;
    const value = 'This text exceeds the limit';
    const exceeded = value.length > maxLength;

    return (
      <InputFeatureLayout>
        <FormField>
          <FormField.LabelRow>
            <FormField.Label>Short label</FormField.Label>
            <FormField.LabelActions>
              <Label className={clsx(exceeded && formFieldStyles.error)}>
                {`${value.length}/${maxLength}`}
              </Label>
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Control describedBy={exceeded ? 'both' : 'none'}>
            <Input defaultValue={value} maxLength={maxLength} error={exceeded} />
          </FormField.Control>
          {exceeded ? <FormField.Error>Character limit exceeded</FormField.Error> : null}
        </FormField>
      </InputFeatureLayout>
    );
  },
};

export const WithLeadingVisual: Story = {
  render: () => (
    <InputFeatureLayout>
      <Input
        placeholder="Search"
        aria-label="Search"
        leadingVisual={<Search className="size-4" aria-hidden />}
      />
    </InputFeatureLayout>
  ),
};

export const WithLoadingIndicator: Story = {
  render: () => (
    <InputFeatureLayout>
      <Input
        placeholder="Loading…"
        aria-label="Loading input"
        trailingVisual={<Spinner size={20} />}
        readOnly
      />
    </InputFeatureLayout>
  ),
};

export const WithTooltipDirection: Story = {
  render: () => (
    <div className="space-y-4" style={{ maxWidth: '36rem' }}>
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <FormField key={side}>
          <FormField.LabelRow>
            <FormField.Label>{side}</FormField.Label>
            <FormField.LabelActions>
              <InputLabelHelpPopover side={side} />
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Control>
            <Input placeholder={`Tooltip ${side}`} />
          </FormField.Control>
        </FormField>
      ))}
    </div>
  ),
};

const ukFlagSrc = 'https://cdn.jsdelivr.net/npm/twemoji@latest/2/svg/1f1ec-1f1e7.svg';

function UkFlagIcon({ className }: Readonly<{ className?: string }>) {
  return <img src={ukFlagSrc} alt="" aria-hidden className={className} />;
}

export const WithTrailingAction: Story = {
  render: () => (
    <InputFeatureLayout className="space-y-4">
      <Input
        type="password"
        placeholder="Password"
        aria-label="Password"
        trailingAction={{
          icon: Eye,
          'aria-label': 'Show password',
          type: 'button',
        }}
      />
      <Input
        placeholder="Country"
        aria-label="Country"
        defaultValue="United Kingdom"
        readOnly
        trailingAction={{
          icon: UkFlagIcon,
          'aria-label': 'Select country',
          type: 'button',
        }}
      />
    </InputFeatureLayout>
  ),
};

export const WithTrailingVisual: Story = {
  render: () => (
    <InputFeatureLayout>
      <Input
        placeholder="Search"
        aria-label="Search with trailing visual"
        trailingVisual={<Search className="size-4" aria-hidden />}
      />
    </InputFeatureLayout>
  ),
};

export const Currency: Story = {
  render: function Render() {
    const [valueDefault, setValueDefault] = useState<number | undefined>();
    const [valueClamped, setValueClamped] = useState<number | undefined>(5);
    const [valueLocale, setValueLocale] = useState<number | undefined>(1234.56);

    return (
      <InputFeatureLayout className="w-full max-w-md space-y-4">
        <FormField>
          <FormField.Label>Default (2 decimals)</FormField.Label>
          <FormField.Control>
            <Input
              format="currency"
              placeholder="Enter amount"
              value={valueDefault}
              onValueChange={setValueDefault}
              currencySymbol="£"
            />
          </FormField.Control>
        </FormField>

        <FormField>
          <FormField.Label>Clamped between 0 and 10</FormField.Label>
          <FormField.Control>
            <Input
              format="currency"
              value={valueClamped}
              onValueChange={setValueClamped}
              min={0}
              max={10}
              decimalScale={2}
              currencySymbol="$"
            />
          </FormField.Control>
        </FormField>

        <FormField>
          <FormField.Label>Locale fr-FR</FormField.Label>
          <FormField.Control>
            <Input
              format="currency"
              value={valueLocale}
              onValueChange={setValueLocale}
              locale="fr-FR"
              decimalScale={2}
              currencySymbol="€"
            />
          </FormField.Control>
        </FormField>
      </InputFeatureLayout>
    );
  },
};
