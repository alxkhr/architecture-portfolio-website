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
          <svg className={styles.blackLeftTriangle} viewBox="0 0 6 6">
            <path d="M5,0l-4,3l4,3z" />
          </svg>
          <svg className={styles.whiteLeftTriangle} viewBox="0 0 6 6">
            <path d="M5,0l-4,3l4,3z" />
          </svg>
        </button>}
      {onClickNext &&
        <button className={styles.buttonRight} onClick={getOnClickHandler(onClickNext)}>
          <svg className={styles.whiteRightTriangle} viewBox="0 0 6 6">
            <path d="M1,0l4,3l-4,3z" />
          </svg>
          <svg className={styles.blackRightTriangle} viewBox="0 0 6 6">
            <path d="M1,0l4,3l-4,3z" />
          </svg>
        </button>}
    </div>
  );
}

GalleryMenu.propTypes = {
  onClickNext: PropTypes.func,
  onClickPrevious: PropTypes.func,
};
