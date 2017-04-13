import React, { PropTypes } from 'react';
import Thumb from './thumb';
import styles from '../style/project-overview.css';

export default function ProjectOverview({ anchor, projects }) {
  return (
    <section className={styles.overview} id={anchor}>
      {projects.map(({ thumbnail: image, title, anchor }, i) =>
        <Thumb key={i} {...{ image, title, anchor }} />
      )}
    </section>
  );
}

ProjectOverview.propTypes = {
  anchor: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    anchor: PropTypes.string.isRequired,
  })),
}
