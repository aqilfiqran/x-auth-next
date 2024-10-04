import { render } from '@testing-library/react';
import { Text } from './Text';

describe('Text variants', () => {
  test('should render text with default variant', () => {
    const { container } = render(<Text />);
    expect(container.firstChild).toHaveClass('text-neutral-black !text-p16');
  });

  test('should render text with h1 variant', () => {
    const { container } = render(<Text variant="h1" />);
    expect(container.firstChild).toHaveClass('text-neutral-black !text-h1');
  });

  test('should render text with h2 variant', () => {
    const { container } = render(<Text variant="h2" />);
    expect(container.firstChild).toHaveClass('text-neutral-black !text-h2');
  });

  test('should render text with h3 variant', () => {
    const { container } = render(<Text variant="h3" />);
    expect(container.firstChild).toHaveClass('text-neutral-black !text-h3');
  });

  test('should render text with primary color', () => {
    const { container } = render(<Text className="text-primary" />);
    expect(container.firstChild).toHaveClass('text-primary !text-p16');
  });
});
