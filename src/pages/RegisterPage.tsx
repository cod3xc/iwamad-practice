import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TextField } from '../components/ui/TextField';
import { validateRegistration, type RegistrationValues } from '../lib/validateRegistration';

export const RegisterPage = () => {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    }
  }

  const getError = (field: keyof RegistrationValues) =>
    touched[field] || submitAttempted ? errors[field] : undefined;

  return (
    <Card style={{ width: '100%', maxWidth: '360px' }}>
      <h2 style={{ marginBottom: 'var(--space-3)' }}>Register</h2>
      {submitted ? (
        <p role="status">Thanks, {values.fullName.trim()}. You are registered.</p>
      ) : (
        <form className="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Full name"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getError('fullName')}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getError('email')}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getError('password')}
          />
          <TextField
            label="Confirm password"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getError('confirmPassword')}
          />
          <div className="field">
            <label className="check" htmlFor="acceptTerms">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                checked={values.acceptTerms}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={getError('acceptTerms') ? true : undefined}
                aria-describedby={getError('acceptTerms') ? 'acceptTerms-error' : undefined}
              />
              <span>Accept the terms</span>
            </label>
            {getError('acceptTerms') && (
              <p id="acceptTerms-error" className="field-error">
                {getError('acceptTerms')}
              </p>
            )}
          </div>
          <Button type="submit" variant="primary">
            Create account
          </Button>
        </form>
      )}
    </Card>
  );
};
