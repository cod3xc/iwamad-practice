import type { ButtonHTMLAttributes } from 'react';
import './ui.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'primary' | 'secondary' | 'like';
  block?: boolean;
};

export const Button = ({ variant = 'default', block, className = '', ...rest }: ButtonProps) => {
  const cls = ['ui-btn', variant !== 'default' && `ui-btn--${variant}`, block && 'ui-btn--block', className]
    .filter(Boolean)
    .join(' ');
  return <button type="button" {...rest} className={cls} />;
};