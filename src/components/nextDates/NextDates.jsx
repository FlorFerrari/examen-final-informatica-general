// NextDates.js
import React from 'react';
import '../../components/nextDates/nextDates.css';

const NextDates = () => {
    const datesData = [
        { city: 'Barcelona', country: 'Spain', artist: 'AgustinAAAAAAAAAAA', date: '2024-03-01', venue: 'Pacha Barcelona' },
        { city: 'Berlin', country: 'Germany', artist: 'Tiello', date: '2024-03-05', venue: 'Berghain' },
        { city: 'Paris', country: 'France', artist: 'Agustin', date: '2024-03-10', venue: 'Le Rex Club' },
        { city: 'London', country: 'United Kingdom', artist: 'Tiello', date: '2024-03-15', venue: 'Ministry of Sound' },
        { city: 'Amsterdam', country: 'Netherlands', artist: 'Agustin', date: '2024-03-20', venue: 'Paradiso' },
        { city: 'New York', country: 'USA', artist: 'Tiello', date: '2024-03-25', venue: 'Output' },
        // Agrega más fechas según sea necesario
        { city: 'Tokyo', country: 'Japan', artist: 'Agustin', date: '2024-04-01', venue: 'Womb' },
        { city: 'Sydney', country: 'Australia', artist: 'Tiello', date: '2024-04-05', venue: 'Ivy' },
        { city: 'Rio de Janeiro', country: 'Brazil', artist: 'Agustin', date: '2024-04-10', venue: 'Green Valley' },
        { city: 'Cape Town', country: 'South Africa', artist: 'Tiello', date: '2024-04-15', venue: 'Shimmy Beach Club' },
        { city: 'Ibiza', country: 'Spain', artist: 'Agustin', date: '2024-04-20', venue: 'Pacha Ibiza' },
        { city: 'Berlin', country: 'Germany', artist: 'Tiello', date: '2024-04-25', venue: 'Watergate' },
        { city: 'Miami', country: 'USA', artist: 'Agustin', date: '2024-05-01', venue: 'LIV' },
        { city: 'Bangkok', country: 'Thailand', artist: 'Tiello', date: '2024-05-05', venue: 'ONYX' },
        { city: 'Stockholm', country: 'Sweden', artist: 'Agustin', date: '2024-05-10', venue: 'Berns' },
        { city: 'Mexico City', country: 'Mexico', artist: 'Tiello', date: '2024-05-15', venue: 'M.N. Roy' },
        { city: 'Moscow', country: 'Russia', artist: 'Agustin', date: '2024-05-20', venue: 'Propaganda' },
        { city: 'Buenos Aires', country: 'Argentina', artist: 'Tiello', date: '2024-05-25', venue: 'Crobar' },
      ];
    
  return (
    <div className="next-dates">
      <h2>Próximas Fechas</h2>
      <table>
        <thead>
          <tr>
            <th>Ciudad</th>
            <th>País</th>
            <th>Artista</th>
            <th>Fecha</th>
            <th>Boliche</th>
          </tr>
        </thead>
        <tbody>
          {datesData.map((date, index) => (
            <tr key={index}>
              <td>{date.city}</td>
              <td>{date.country}</td>
              <td>{date.artist}</td>
              <td>{date.date}</td>
              <td>{date.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NextDates;
