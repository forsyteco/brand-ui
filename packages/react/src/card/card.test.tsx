import { describe, expect, it } from 'vitest';
import { render, screen } from '#test-utils';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

describe('Card', () => {
  describe('when rendered with header and content', () => {
    it('should render the card structure and forward className', () => {
      // Arrange
      // Act
      render(
        <Card className="test-card">
          <CardHeader>
            <CardTitle>Title</CardTitle>
          </CardHeader>
          <CardContent>Content</CardContent>
        </Card>
      );
      const card = screen.getByText('Title').closest('[data-slot="card"]');

      // Assert
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('test-card');
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('when all slots are provided', () => {
    it('should render each slot', () => {
      // Arrange
      // Act
      render(
        <Card>
          <CardHeader>
            <CardTitle>Header</CardTitle>
            <CardDescription>Description</CardDescription>
            <CardAction>Action</CardAction>
          </CardHeader>
          <CardContent>Body</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      );

      // Assert
      expect(screen.getByText('Header')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByText('Action')).toBeInTheDocument();
      expect(screen.getByText('Body')).toBeInTheDocument();
      expect(screen.getByText('Footer')).toBeInTheDocument();
    });
  });
});
