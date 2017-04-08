import React, { PropTypes } from 'react';
import styles from '../style/disclaimer.css';

export default function Disclaimer({ anchor, children }) {
  return <section className={styles.disclaimer} id={anchor}><p>{children}</p></section>;
}

Disclaimer.propTypes = {
  anchor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
