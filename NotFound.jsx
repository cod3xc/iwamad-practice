import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <h1>404 — Page not found</h1>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </section>
  );
}
