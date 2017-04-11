import React, { PropTypes } from 'react';
import styles from '../style/contact.css';

export default function Contact({ anchor, types }) {
  return (
    <section className={styles.contact} id={anchor}>
      <h1 className={styles.title}>Kontakt</h1>
      <ul>
        {types.map(({ type, value }, i) => (
          <li className={styles.item} key={i}>
            {type && <span className={styles.type}>{type}</span>}
            <span className={styles.value}>{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Contact.propTypes = {
  anchor: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
