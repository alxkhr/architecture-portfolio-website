import React, { PropTypes } from 'react';
import styles from '../style/footer.css';
import { markdown } from 'markdown';

export default function Footer({ anchor, credits }) {
  return (
    <section className={styles.footer} id={anchor}>
      <div
        className={styles.credits}
        dangerouslySetInnerHTML={{ __html: markdown.toHTML(credits) }}
      />
    </section>
  );
}

Footer.propTypes = {
  anchor: PropTypes.string.isRequired,
  credits: PropTypes.string.isRequired,
};
