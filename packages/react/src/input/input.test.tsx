import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '#test-utils';
import userEvent from '@testing-library/user-event';
import { Input } from './input';
import styles from './input.module.css';

describe('Input', () => {
  describe('when rendered with default props', () => {
    it('should render a textbox input', () => {
      // Arrange
      render(<Input />);

      // Act
      const input = screen.getByRole('textbox');

      // Assert
      expect(input).toBeInTheDocument();
    });
  });

  describe('when aria-invalid is true', () => {
    it('should preserve root styling and set aria-invalid attribute', () => {
      // Arrange
      const { container } = render(<Input aria-invalid="true" />);

      // Act
      const wrapper = container.firstChild;
      const input = screen.getByRole('textbox');

      // Assert
      expect(wrapper).toHaveClass(styles.root);
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('when error is true', () => {
    it('should set aria-invalid to true and apply error styling', () => {
      // Arrange
      const { container } = render(<Input error aria-label="Error input" />);

      // Act
      const input = screen.getByRole('textbox', { name: 'Error input' });
      const wrapper = container.firstChild as HTMLElement;

      // Assert
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(wrapper).toHaveClass(styles['root--error']);
    });
  });

  describe('when success is true', () => {
    it('should apply success styling on the wrapper', () => {
      // Arrange
      const { container } = render(<Input success aria-label="Success input" />);

      // Act
      const wrapper = container.firstChild as HTMLElement;

      // Assert
      expect(wrapper).toHaveClass(styles['root--success']);
    });
  });

  describe('when both error and success are true', () => {
    it('should prefer error styling over success', () => {
      // Arrange
      const { container } = render(<Input error success aria-label="Conflict input" />);

      // Act
      const input = screen.getByRole('textbox', { name: 'Conflict input' });
      const wrapper = container.firstChild as HTMLElement;

      // Assert
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(wrapper).toHaveClass(styles['root--error']);
      expect(wrapper).not.toHaveClass(styles['root--success']);
    });
  });

  describe('when disabled is true', () => {
    it('should disable the input control', () => {
      // Arrange
      render(<Input disabled aria-label="Disabled input" />);

      // Act
      const input = screen.getByRole('textbox', { name: 'Disabled input' });

      // Assert
      expect(input).toBeDisabled();
    });
  });

  describe('when type is overridden', () => {
    it('should render the provided input type', () => {
      // Arrange
      render(<Input type="email" />);

      // Act
      const input = screen.getByRole('textbox');

      // Assert
      expect(input).toHaveAttribute('type', 'email');
    });
  });

  describe('when common form and accessibility attributes are provided', () => {
    it('should pass through name, required, and aria-label attributes', () => {
      // Arrange
      render(<Input name="email" required aria-label="Email address" />);

      // Act
      const input = screen.getByRole('textbox', { name: 'Email address' });

      // Assert
      expect(input).toHaveAttribute('name', 'email');
      expect(input).toBeRequired();
    });
  });

  describe('when autoComplete is not provided', () => {
    it('should disable browser autofill and password manager heuristics', () => {
      // Arrange
      render(<Input aria-label="Reference" />);

      // Act
      const input = screen.getByRole('textbox', { name: 'Reference' });

      // Assert
      expect(input).toHaveAttribute('autocomplete', 'off');
      expect(input).toHaveAttribute('data-lpignore', 'true');
      expect(input).toHaveAttribute('data-1p-ignore', 'true');
    });
  });

  describe('when autoComplete is explicitly enabled', () => {
    it('should allow the provided autoComplete token', () => {
      // Arrange
      render(<Input autoComplete="email" aria-label="Email" />);

      // Act
      const input = screen.getByRole('textbox', { name: 'Email' });

      // Assert
      expect(input).toHaveAttribute('autocomplete', 'email');
      expect(input).not.toHaveAttribute('data-lpignore');
    });
  });

  describe('when trailingAction is provided', () => {
    it('should render an icon button in the trailing slot', () => {
      // Arrange
      render(
        <Input
          aria-label="Password"
          trailingAction={{
            icon: () => null,
            'aria-label': 'Show password',
          }}
        />
      );

      // Act
      const button = screen.getByRole('button', { name: 'Show password' });

      // Assert
      expect(button).toBeInTheDocument();
    });
  });

  describe('when format is currency', () => {
    it('should format and report numeric value', async () => {
      // Arrange
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(<Input format="currency" onValueChange={onValueChange} />);
      const input = screen.getByRole('textbox');

      // Act
      await user.type(input, '1234');

      // Assert
      expect(input).toHaveValue('1,234');
      expect(onValueChange).toHaveBeenLastCalledWith(1234);
    });

    it('should render currency symbol in start element', () => {
      // Arrange
      render(<Input format="currency" currencySymbol="$" />);

      // Assert
      expect(screen.getByText('$')).toBeInTheDocument();
    });

    it('should allow partial decimal states', async () => {
      // Arrange
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(<Input format="currency" onValueChange={onValueChange} />);
      const input = screen.getByRole('textbox');

      // Act
      await user.type(input, '1.');

      // Assert
      expect(input).toHaveValue('1.');
      expect(onValueChange).toHaveBeenLastCalledWith(1);

      // Act
      await user.clear(input);
      await user.type(input, '.5');

      // Assert
      expect(input).toHaveValue('0.5');
      expect(onValueChange).toHaveBeenLastCalledWith(0.5);
    });

    it('should clamp values on change and blur', async () => {
      // Arrange
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(<Input format="currency" min={0} max={10} onValueChange={onValueChange} />);
      const input = screen.getByRole('textbox');

      // Act
      await user.type(input, '25');

      // Assert
      expect(onValueChange).toHaveBeenLastCalledWith(10);

      // Act
      await user.tab();

      // Assert
      expect(input).toHaveValue('10');
    });

    it('should preserve trailing zeros on blur', async () => {
      // Arrange
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(<Input format="currency" onValueChange={onValueChange} />);
      const input = screen.getByRole('textbox');

      // Act
      await user.type(input, '1.00');
      await user.tab();

      // Assert
      expect(input).toHaveValue('1.00');
      expect(onValueChange).toHaveBeenLastCalledWith(1);
    });

    it('should sync display when value prop changes', () => {
      // Arrange
      const { rerender } = render(<Input format="currency" value={1234} />);
      const input = screen.getByRole('textbox');

      // Assert
      expect(input).toHaveValue('1,234');

      // Act
      rerender(<Input format="currency" value={567.89} />);

      // Assert
      expect(input).toHaveValue('567.89');
    });
  });
});
