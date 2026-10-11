import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LikeButton } from './LikeButton';

function Wrapper() {
  const [n, setN] = useState(0);
  return <LikeButton count={n} onLike={() => setN(n + 1)} />;
}

test('LikeButton increments the count on click', async () => {
  render(<Wrapper />);
  const button = screen.getByRole('button', { name: /like/i });
  expect(button).toHaveTextContent('♥ 0');
  await userEvent.click(button);
  expect(button).toHaveTextContent('♥ 1');
});
