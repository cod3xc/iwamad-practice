import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LikesProvider } from '../context/LikesContext';
import { LikeButton } from './LikeButton';

describe('LikeButton', () => {
  it('increments like count when clicked', async () => {
    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/Like Profile/i);

    await userEvent.click(button);

    expect(button).toHaveTextContent(/Liked \(1\)/i);
  });
});