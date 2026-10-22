import type { HTMLAttributes } from 'react';
import './ui.css';

export const Card = ({ className, ...rest }: HTMLAttributes<HTMLElement>) => (
  <article {...rest} className={['ui-card', className].filter(Boolean).join(' ')} />
);
