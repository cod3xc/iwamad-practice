import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const ContactPage = () => (
  <Card className="page-card stack">
    <h2>Contact Me</h2>
    <p className="muted">Feel free to reach out via email:</p>
    <Button variant="primary" href="mailto:a_alisher@kbtu.kz">a_alisher@kbtu.kz</Button>
  </Card>
);
