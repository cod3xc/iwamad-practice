import { Link, useParams } from 'react-router';
import { EventSignupForm } from '../components/EventSignupForm';
import { events } from '../data/events';

export const EventDetailsPage = () => {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === Number(eventId));

  if (!event) {
    return (
      <section style={{ width: '100%', maxWidth: '360px' }}>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <p>
          <Link to="/events">Back to all events</Link>
        </p>
      </section>
    );
  }

  return (
    <section style={{ width: '100%', maxWidth: '360px' }}>
      <h1>{event.title}</h1>
      <p>
        {event.date} · {event.place}
      </p>
      <EventSignupForm event={event} />
      <p>
        <Link to="/events">Back to all events</Link>
      </p>
    </section>
  );
};
