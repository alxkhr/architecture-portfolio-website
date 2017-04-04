import React, { PropTypes } from 'react';
import styles from '../style/navigation.css';

export default function Navigation({ title, navigation }) {
  return (
    <div className={styles.navigation}>
      <h1 className={styles.title}>{title}</h1>
      <ul className={styles.menu}>
        {navigation.map(({ title, anchor }, i) => (
          <li className={styles.item} key={i}><a href={`#${anchor}`}>{title}</a></li>
        ))}
      </ul>
    </div>
  );
}

Navigation.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      anchor: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
