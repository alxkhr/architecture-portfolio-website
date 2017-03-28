import React, { PropTypes } from 'react';

export default function Team({ portrait, biography, employees }) {
  return (
    <div>
      <img src={portrait} />
      <p>{biography}</p>
      <ul>
        {employees.map((employee, i) => <li key={i}>{employee}</li>)}
      </ul>
    </div>
  );
}

Team.propTypes = {
  portrait: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
  employees: PropTypes.array.isRequired,
};
