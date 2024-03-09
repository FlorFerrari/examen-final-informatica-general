import React from 'react';
import '../../components/nextDates/nextDates.css';

const NextDates = () => {
    const datesData = [
        { city: 'Barcelona', country: 'España', artist: 'Francisco García', date: '24/03/2024', venue: 'Pacha Barcelona' },
        { city: 'Berlin', country: 'Alemania', artist: 'Tiello', date: '4/04/2024', venue: 'Berghain' },
        { city: 'Paris', country: 'Francia', artist: 'Francisco García', date: '7/04/2024', venue: 'Le Rex Club' },
        { city: 'London', country: 'Reino Unido', artist: 'Golden Hour', date: '11/04/2024', venue: 'Ministry of Sound' },
        { city: 'Amsterdam', country: 'Netherlands', artist: 'Agustin Giri', date: '15/04/2024', venue: 'Paradiso' },
        { city: 'New York', country: 'USA', artist: 'Tiello', date: '1/05/2024', venue: 'Output' },
        { city: 'Tokyo', country: 'Japón', artist: 'Last Men on Earth', date: '5/05/2024', venue: 'Womb' },
        { city: 'Sydney', country: 'Australia', artist: 'Francisco García', date: '20/05/2024', venue: 'Ivy' },
        { city: 'Rio de Janeiro', country: 'Brasil', artist: 'Agustin', date: '27/05/2024', venue: 'Green Valley' },
        { city: 'Cape Town', country: 'Sudáfrica', artist: 'Last Men on Earth', date: '4/06/2024', venue: 'Shimmy Beach Club' },
        { city: 'Ibiza', country: 'España', artist: 'Djolee', date: '25/06/2024', venue: 'Pacha Ibiza' },
        { city: 'Berlin', country: 'Alemania', artist: 'Last Men on Earth', date: '7/07/2024', venue: 'Watergate' },
        { city: 'Miami', country: 'USA', artist: 'Last Men on Earth', date: '9/07/2024', venue: 'LIV' },
        { city: 'Bangkok', country: 'Tailandia', artist: 'Djolee', date: '17/07/2024', venue: 'ONYX' },
        { city: 'Stockholm', country: 'Suiza', artist: 'Last Men on Earth', date: '22/07/2024', venue: 'Berns' },
        { city: 'Mexico City', country: 'Mexico', artist: 'Francisco García', date: '14/08/2024', venue: 'M.N. Roy' },
        { city: 'Moscow', country: 'Rusia', artist: 'Djolee', date: '24/08/2024', venue: 'Propaganda' },
        { city: 'Buenos Aires', country: 'Argentina', artist: 'Last Men on Earth', date: '25/08/2024', venue: 'Crobar' },
      ];
    
  return (
    <div className="next-dates">
      
      <table>
        <thead>
          <tr>
            <th>Ciudad</th>
            <th>País</th>
            <th>Artista</th>
            <th>Fecha</th>
            <th>Club</th>
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
