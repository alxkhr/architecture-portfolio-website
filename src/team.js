import React, { PropTypes } from 'react';
import styles from '../style/team.css';

export default function Team(
  { anchor, bearer, portrait, resume, partners, employees, formerEmployees },
) {
  return (
    <section className={styles.team} id={anchor}>
      <h1 className={styles.title}>Büro</h1>
      <div className={styles.twoColumns}>
        <img src={portrait} />
        <ul>
          <li><h2 className={styles.bearer}>{bearer}</h2></li>
          {resume.map(({ date, event }, i) => (
            <li className={styles.item} key={i}>
              <span className={styles.date}>{date}</span>
              <span className={styles.event}>{event}</span>
            </li>
          ))}
        </ul>
      </div>
      {partners && <h2 className={styles.subTitle}>Partner</h2>}
      {partners &&
        <ul>
          {partners.map((partner, i) => <li className={styles.item} key={i}>{partner}</li>)}
        </ul>}
      <h2 className={styles.subTitle}>Mitarbeiter</h2>
      <ul>
        {employees.map((employee, i) => <li className={styles.item} key={i}>{employee}</li>)}
      </ul>
      {formerEmployees && <h2 className={styles.subTitle}>Ehemalige Mitarbeiter</h2>}
      {formerEmployees &&
        <p>
          {formerEmployees.map((employee, i) => (
            <span className={styles.formerEmployee} key={i}>{employee}</span>
          ))}
        </p>}
    </section>
  );
}

Team.propTypes = {
  anchor: PropTypes.string.isRequired,
  bearer: PropTypes.string.isRequired,
  portrait: PropTypes.string.isRequired,
  resume: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      event: PropTypes.string.isRequired,
    }),
  ).isRequired,
  partners: PropTypes.array,
  employees: PropTypes.array.isRequired,
  formerEmployees: PropTypes.array,
};
