import { Link } from 'react-router';
import { Card } from '../components/ui/Card';

export const NotFoundPage = () => (
  <Card className="page-card stack">
    <p className="error-code">404</p>
    <p className="muted">Page not found</p>
    <Link to="/" className="ui-btn">← Back to Home</Link>
  </Card>
);
