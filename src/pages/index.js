import React from 'react';
// Componentes
import EventCard from '@/components/EventCard/EventCard';
// Data
import events from '@/data/events';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido a la Aplicación de Eventos</h1>
      <section className='container'>
        <div className='row'>
        {events.map((event, index) => (
          <EventCard key={index} event={event}/>
        ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;