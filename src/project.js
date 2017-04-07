import React, { PropTypes } from 'react';
import Gallery from './gallery';

export default function Project({ title, summary, images, specification, anchor }) {
  return (
    <section id={anchor}>
      {images.length > 1 ? <Gallery images={images} /> : <img src={images[0]} />}
      <h1>{title}</h1>
      <p>{summary}</p>
      {specification &&
        specification.length > 0 &&
        <ul>
          {specification.map((item, i) => (
            <li key={i}><span>{item.id}</span><span>{item.value}</span></li>
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
