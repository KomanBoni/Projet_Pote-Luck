import React, { useState } from 'react';
import { useEventContext } from './EventContext';

const CreateEvent: React.FC = () => {
  const { addEvent } = useEventContext();
  const [date, setDate] = useState<string>("");
  const [whatToBring, setWhatToBring] = useState<string>("");
  const [invitations, setInvitations] = useState<string[]>([]);
  const [invitee, setInvitee] = useState<string>("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleWhatToBringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatToBring(e.target.value);
  };

  const handleInviteeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvitee(e.target.value);
  };

  const handleInvite = () => {
    setInvitations([...invitations, invitee]);
    setInvitee("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const eventDetails = `Date: ${date}, Ce qu'il faut ramener: ${whatToBring}, Invitations: ${invitations.join(', ')}`;
    addEvent(eventDetails);
  };

  return (
    <div>
      <h1>Créer un événement</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date de l'événement:</label>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div>
          <label>Ce qu'il faut ramener:</label>
          <input type="text" value={whatToBring} onChange={handleWhatToBringChange} />
        </div>
        <div>
          <label>Inviter un ami:</label>
          <input type="text" value={invitee} onChange={handleInviteeChange} />
          <button type="button" onClick={handleInvite}>
            Inviter
          </button>
        </div>
        <div>
          <h3>Invitations:</h3>
          <ul>
            {invitations.map((invitation, index) => (
              <li key={index}>{invitation}</li>
            ))}
          </ul>
        </div>
        <button type="submit">Créer l'événement</button>
      </form>
    </div>
  );
};

export default CreateEvent;
