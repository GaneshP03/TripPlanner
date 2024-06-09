import React from 'react';
import '../styles/Data.css';

const Data = () => {
    return (
      <table className="data-table">
        <caption>Travel Plans</caption>
        <thead>
          <tr>
            <th>From Place</th>
            <th>Destination</th>
            <th>Budget</th>
            <th>Days</th>
            <th>Places</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vizag</td>
            <td>Mumbai</td>
            <td>10000</td>
            <td>7</td>
            <td>Ajantha Caves, The Taj Hotel</td>
          </tr>
          <tr>
            <td>Vizag</td>
            <td>Mumbai</td>
            <td>10000</td>
            <td>3</td>
            <td>Matheran, Mahabaleshwar, Puneri Forts</td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default Data;