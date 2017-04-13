import React, { PropTypes } from 'react';
import styles from '../style/gallery-menu.css';

function getOnClickHandler(callback) {
  return event => {
    if (event && event.preventDefault) event.preventDefault();
    if (callback) callback();
  };
}

export default function GalleryMenu({ onClickNext, onClickPrevious }) {
  return (
    <div className={styles.galleryMenu}>
      {onClickPrevious &&
        <button className={styles.buttonLeft} onClick={getOnClickHandler(onClickPrevious)}>
          <svg className={styles.leftTriangle} style={{ height: '40px', width: '48px' }} viewBox="0 0 40 48">
            <path d="M32,8l-24,16l24,16z" />
          </svg>
        </button>}
      {onClickNext &&
        <button className={styles.buttonRight} onClick={getOnClickHandler(onClickNext)}>
          <svg className={styles.rightTriangle} style={{ height: '40px', width: '48px' }} viewBox="0 0 40 48">
            <path d="M8,8l24,16l-24,16z" />
          </svg>
        </button>}
    </div>
  );
}

GalleryMenu.propTypes = {
  onClickNext: PropTypes.func,
  onClickPrevious: PropTypes.func,
};
