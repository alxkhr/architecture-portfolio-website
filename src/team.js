import React, { PropTypes } from 'react';

export default function Team({ anchor, portrait, biography, employees }) {
  return (
    <section id={anchor}>
      <img src={portrait} />
      <p>{biography}</p>
      <ul>
        {employees.map((employee, i) => <li key={i}>{employee}</li>)}
      </ul>
    </section>
  );
}

Team.propTypes = {
  anchor: PropTypes.string.isRequired,
  portrait: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
  employees: PropTypes.array.isRequired,
};
