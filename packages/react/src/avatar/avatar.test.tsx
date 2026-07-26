import { describe, expect, it } from 'vitest';
import { render, screen } from '#test-utils';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

describe('Avatar', () => {
  describe('when rendered with default props', () => {
    it('should render the avatar root', () => {
      // Arrange
      // Act
      const { container } = render(<Avatar />);

      // Assert
      expect(container.querySelector('[data-slot="avatar"]')).toBeInTheDocument();
    });
  });

  describe('when using default fallback', () => {
    it('should render custom fallback children', () => {
      // Arrange
      // Act
      render(
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      );

      // Assert
      expect(screen.getByText('AB')).toBeInTheDocument();
    });
  });

  describe('when using initials fallback', () => {
    it('should render initials from the name', () => {
      // Arrange
      // Act
      const { container } = render(
        <Avatar>
          <AvatarFallback variant="initials" name="Ada Lovelace" />
        </Avatar>
      );

      // Assert
      expect(container.querySelector('[data-slot="avatar-fallback"]')).toBeInTheDocument();
      expect(screen.getByText('AL')).toBeInTheDocument();
    });
  });

  describe('when using boring fallback', () => {
    it('should render the boring avatar graphic', () => {
      // Arrange
      // Act
      const { container } = render(
        <Avatar>
          <AvatarFallback variant="boring" name="Grace Hopper" />
        </Avatar>
      );

      // Assert
      expect(container.querySelector('[data-slot="avatar-fallback"]')).toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('when an image is provided', () => {
    it('should mount the avatar without crashing', () => {
      // Arrange
      // Act
      const { container } = render(
        <Avatar>
          <AvatarImage src="https://example.com/avatar.png" alt="Avatar" />
        </Avatar>
      );

      // Assert
      expect(container.querySelector('[data-slot="avatar"]')).toBeInTheDocument();
    });
  });
});
