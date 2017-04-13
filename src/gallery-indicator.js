import React, { PropTypes } from 'react';
import styles from '../style/gallery-indicator.css';

export default function GalleryIndicator({ index, length }) {
  return (
    <svg className={styles.indicator} style={{ width: `${length * 14}px`, height: '14px' }}>
      {[...Array(length)].map((_, i) => {
        const cx = 6 + i * 14;
        return (
          <circle
            key={i}
            className={i === index ? styles.active : styles.inactive}
            cx={cx}
            cy="6"
            r="4"
          />
        );
      })}
    </svg>
  );
}

GalleryIndicator.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
