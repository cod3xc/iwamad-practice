import { Link } from 'react-router';
import { Card } from '../components/ui/Card';

export const NotFoundPage = () => (
  <Card>
    <h2>404</h2>
    <p className="muted">Page not found</p>
    <Link to="/" className="btn btn-secondary">← Back to Home</Link>
  </Card>
);
