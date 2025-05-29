import { useEffect, useState } from 'react';

function ConstructorStandings() {
  const [constructors, setConstructors] = useState([]);

  useEffect(() => {
    fetch('https://ergast.com/api/f1/2024/24/constructorStandings.json')
      .then((res) => res.json())
      .then((data) => {
        const standings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        setConstructors(standings);
      });
  }, []);

  return (
    <div className='constructor'>
      <h2>Konstruktörsmästerskapet 2024</h2>
      <table>
        <thead>
          <tr>
            <th>Placering</th>
            <th>Team</th>
            <th>Nation</th>
            <th>Poäng</th>
          </tr>
        </thead>
        <tbody>
          {constructors.map((team, i) => (
            <tr key={i}>
              <td>{team.position}</td>
              <td>{team.Constructor.name}</td>
              <td>{team.Constructor.nationality}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConstructorStandings;
