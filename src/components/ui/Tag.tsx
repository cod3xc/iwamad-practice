import type { HTMLAttributes } from 'react';
import './ui.css';

export const Tag = ({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) => (
  <span {...rest} className={['ui-tag', className].filter(Boolean).join(' ')} />
);
