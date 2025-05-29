import { useEffect, useState } from 'react';

function DriverStandings() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch('https://ergast.com/api/f1/2024/24/driverStandings.json')
      .then((res) => res.json())
      .then((data) => {
        const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        setDrivers(standings);
      });
  }, []);

  return (
    <div className='drivers'>
      <h2>Förarmästerskapet 2024</h2>
      <table>
        <thead>
          <tr>
            <th>Placering</th>
            <th>Förare</th>
            <th>Team</th>
            <th>Poäng</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver, i) => (
            <tr key={i}>
              <td>{driver.position}</td>
              <td>{driver.Driver.givenName} {driver.Driver.familyName}</td>
              <td>{driver.Constructors[0].name}</td>
              <td>{driver.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DriverStandings;
