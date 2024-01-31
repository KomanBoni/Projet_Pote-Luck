"use client"
import React from 'react';
import { EventProvider } from '../../components/EventContext';
import CreateEvent from '../../components/CreateEvent';
import EventsPage from '../../components/EventPage';

const Home: React.FC = () => {
  return (
    <EventProvider>
      <CreateEvent />
      <EventsPage />
    </EventProvider>
  );
};

export default Home;
