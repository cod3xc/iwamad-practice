import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button = ({ variant = 'primary', className = '', ...rest }: ButtonProps) => {
  const classes = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ');
  return <button type="button" className={classes} {...rest} />;
};
