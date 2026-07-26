import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '#test-utils';
import userEvent from '@testing-library/user-event';
import { Button } from './button';
import styles from './button.module.css';

const HeartIcon = ({ className }: { className?: string }) => (
  <svg data-testid="icon" aria-hidden className={className} />
);

describe('Button', () => {
  describe('when rendered with default props', () => {
    it('should render the button label', () => {
      // Arrange
      // Act
      render(<Button>Click me</Button>);

      // Assert
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });
  });

  describe('when clicked', () => {
    it('should call onClick', async () => {
      // Arrange
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      // Act
      await user.click(screen.getByText('Click me'));

      // Assert
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when variant is secondary', () => {
    it('should apply variant classes', () => {
      // Arrange
      // Act
      const { container } = render(<Button variant="secondary">Button</Button>);

      // Assert
      expect(container.querySelector('button')).toHaveClass(styles['variant-secondary']);
    });
  });

  describe('when size is lg', () => {
    it('should apply size classes', () => {
      // Arrange
      // Act
      const { container } = render(<Button size="lg">Button</Button>);

      // Assert
      expect(container.querySelector('button')).toHaveClass(styles['size-lg']);
    });
  });

  describe('when disabled is true', () => {
    it('should disable the button', () => {
      // Arrange
      // Act
      render(<Button disabled>Disabled</Button>);

      // Assert
      expect(screen.getByText('Disabled')).toBeDisabled();
    });
  });

  describe('when used as an icon-only button', () => {
    it('should render the icon with an accessible label', () => {
      // Arrange
      // Act
      render(<Button icon={HeartIcon} aria-label="Favorite" />);

      // Assert
      expect(screen.getByLabelText('Favorite')).toBeInTheDocument();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('should apply variant, size, and shape classes', () => {
      // Arrange
      // Act
      const { container } = render(
        <Button icon={HeartIcon} variant="primary" size="lg" shape="circle" aria-label="Favorite" />
      );
      const button = container.firstChild as HTMLElement;

      // Assert
      expect(button).toHaveClass(styles['variant-primary']);
      expect(button).toHaveClass(styles['size-icon-lg'], styles['shape-circle']);
      expect(screen.getByTestId('icon')).toHaveClass(styles['icon-lg']);
    });

    it('should support loading state', () => {
      // Arrange
      // Act
      const { container } = render(<Button icon={HeartIcon} loading aria-label="Loading" />);

      // Assert
      expect(container.querySelector('svg.animate-spinner-rotate')).toBeInTheDocument();
    });

    it('should render as a link when href is provided', () => {
      // Arrange
      // Act
      render(<Button as="a" href="https://example.com" icon={HeartIcon} aria-label="Go to site" />);

      // Assert
      expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com');
    });

    it('should keep interactions when inactive but dim the button', async () => {
      // Arrange
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button icon={HeartIcon} inactive onClick={handleClick} aria-label="Inactive" />);

      // Act
      await user.click(screen.getByRole('button'));

      // Assert
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(screen.getByRole('button')).toHaveClass(styles.inactive);
    });

    it('should map danger variant to destructive styling', () => {
      // Arrange
      // Act
      const { container } = render(
        <Button icon={HeartIcon} variant="danger" aria-label="Delete" />
      );

      // Assert
      expect(container.firstChild).toHaveClass(styles['variant-destructive']);
    });
  });
});
