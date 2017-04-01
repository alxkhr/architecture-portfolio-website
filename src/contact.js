import React, { PropTypes } from 'react';

export default function Contact({ types }) {
  return (
    <div>
      <ul>
        {types.map(({ type, value }, i) => (
          <li key={i}><span>{type}</span><span>{value}</span></li>
        ))}
      </ul>
    </div>
  );
}

Contact.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
