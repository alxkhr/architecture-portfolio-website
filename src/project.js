import React, { PropTypes } from 'react';
import Gallery from './gallery';
import styles from '../style/project.css';

export default function Project({ title, summary, images, specification, anchor }) {
  return (
    <section className={styles.project} id={anchor}>
      {images.length > 1
        ? <Gallery images={images} />
        : <img className={styles.image} src={images[0]} />}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{summary}</p>
      {specification &&
        specification.length > 0 &&
        <ul className={styles.specification}>
          {specification.map((item, i) => (
            <li className={styles.item} key={i}>
              <span className={styles.label}>{item.id}</span>
              <span className={styles.value}>{item.value}</span>
            </li>
          ))}
        </ul>}
    </section>
  );
}

Project.propTypes = {
  anchor: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  specification: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
};
