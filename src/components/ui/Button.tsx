import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import './ui.css';

export type ButtonVariant = 'default' | 'primary' | 'like';

type Common = { variant?: ButtonVariant; block?: boolean };
type ButtonProps = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const Button = (props: ButtonProps | LinkProps) => {
  const { variant = 'default', block, className, ...rest } = props;
  const cls = ['ui-btn', variant !== 'default' && `ui-btn--${variant}`, block && 'ui-btn--block', className]
    .filter(Boolean)
    .join(' ');
  if (props.href !== undefined) {
    return <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={cls} />;
  }
  return <button type="button" {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={cls} />;
};
