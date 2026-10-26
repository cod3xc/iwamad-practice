import type { ReactNode } from 'react';

export const Card = ({ children }: { children: ReactNode }) => (
  <article className="card">{children}</article>
);
