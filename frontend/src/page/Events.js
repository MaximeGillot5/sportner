import React from 'react';
import NewEventForm from '../components/NewEventForm';
import EventsList from '../components/EventsList';

const Events = () => {
  return (
    <div>
      <NewEventForm />
      <EventsList />
    </div>
  );
};

export default Events;