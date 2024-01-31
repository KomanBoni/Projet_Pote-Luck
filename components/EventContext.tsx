
import React, { createContext, useContext, useState } from 'react';

interface EventContextProps {
  events: string[]; 
  addEvent: (event: string) => void;
}

const EventContext = createContext<EventContextProps | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<string[]>([]);

  const addEvent = (event: string) => {
    setEvents([...events, event]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};
