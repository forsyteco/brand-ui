import { describe, expect, it } from 'vitest';
import { render, screen } from '#test-utils';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './breadcrumb';

describe('Breadcrumb', () => {
  describe('when rendered with links and a current page', () => {
    it('should expose navigation semantics and link hrefs', () => {
      // Arrange
      // Act
      render(
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      );

      // Assert
      expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/home');

      const current = screen.getByText('Settings');
      expect(current).toHaveAttribute('aria-current', 'page');
      expect(current).not.toHaveAttribute('role', 'link');
    });
  });

  describe('when rendering the ellipsis', () => {
    it('should expose accessible text', () => {
      // Arrange
      // Act
      render(<BreadcrumbEllipsis />);

      // Assert
      expect(screen.getByText('More')).toBeInTheDocument();
    });
  });
});
