import { EventCard } from '../components/EventCard';
import { events } from '../data/events';

export const EventsPage = () => (
  <section style={{ width: '100%', maxWidth: '720px' }}>
    <h1 style={{ marginBottom: 'var(--space-4)' }}>Events</h1>
    <div className="card-grid">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  </section>
);
