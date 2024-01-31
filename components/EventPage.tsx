
import React from 'react';
import { useEventContext } from './EventContext';

const EventsPage: React.FC = () => {
  const { events } = useEventContext();

  return (
    <div>
      <h1>Tous les événements</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
