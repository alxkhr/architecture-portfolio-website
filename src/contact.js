import React, { PropTypes } from 'react';

export default function Contact({ anchor, types }) {
  return (
    <div id={anchor}>
      <ul>
        {types.map(({ type, value }, i) => (
          <li key={i}><span>{type}</span><span>{value}</span></li>
        ))}
      </ul>
    </div>
  );
}

Contact.propTypes = {
  anchor: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
