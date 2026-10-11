export function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button type="button" className={`btn btn--${variant} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
