import React, { PropTypes } from 'react';
import styles from '../style/contact.css';

export default function Contact({ anchor, map, types }) {
  return (
    <section className={styles.contact} id={anchor}>
      <h1 className={styles.title}>Kontakt</h1>
      <div className={styles.twoColumns}>
        <ul className={styles.list}>
          {types.map(({ type, value }, i) => (
            <li className={styles.item} key={i}>
              {type && <span className={styles.type}>{type}</span>}
              <span className={styles.value}>{value}</span>
            </li>
          ))}
        </ul>
        <div><img src={map} className={styles.map} /></div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  anchor: PropTypes.string.isRequired,
  map: PropTypes.string,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
