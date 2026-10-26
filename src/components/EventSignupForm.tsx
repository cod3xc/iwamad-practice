import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react';
import { Button } from './ui/Button';
import { TextField } from './ui/TextField';
import type { CampusEvent } from '../data/events';
import { validateSignup, type SignupValues } from '../lib/validateSignup';

const emptyValues: SignupValues = {
  fullName: '',
  email: '',
  tickets: '1',
};

export const EventSignupForm = ({ event }: { event: CampusEvent }) => {
  const [values, setValues] = useState<SignupValues>(emptyValues);
  const [touched, setTouched] = useState<Partial<Record<keyof SignupValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [message, setMessage] = useState('');

  const errors = validateSignup(values, seatsLeft);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length > 0) return;

    const tickets = Number(values.tickets);
    setSeatsLeft(seatsLeft - tickets);
    setMessage(`Booked: ${tickets} for ${values.fullName.trim()}.`);
    setValues(emptyValues);
    setTouched({});
    setSubmitAttempted(false);
  }

  const getError = (field: keyof SignupValues) =>
    touched[field] || submitAttempted ? errors[field] : undefined;

  return (
    <>
      <p>Seats left: {seatsLeft}</p>
      {message && <p role="status">{message}</p>}
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          autoComplete="name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('fullName')}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('email')}
        />
        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('tickets')}
        />
        <Button type="submit" variant="primary">
          Book
        </Button>
      </form>
    </>
  );
};
