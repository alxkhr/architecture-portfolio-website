import React, { PropTypes } from 'react';
import styles from '../style/contact.css';

export default function Contact({ anchor, types }) {
  return (
    <section className={styles.contact} id={anchor}>
      <ul>
        {types.map(({ type, value }, i) => (
          <li key={i}><span>{type}</span><span>{value}</span></li>
        ))}
      </ul>
    </section>
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
