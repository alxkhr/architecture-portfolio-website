import React, { PropTypes } from 'react';

function getOnClickHandler(callback) {
  return event => {
    if (event && event.preventDefault) event.preventDefault();
    if (callback) callback();
  }
}

export default function GalleryMenu({ onClickNext, onClickPrevious }) {
  return (
    <div>
      {onClickNext && <a onClick={getOnClickHandler(onClickNext)}>next</a>}
      {onClickPrevious && <a onClick={getOnClickHandler(onClickPrevious)}>previous</a>}
    </div>
  );
}

GalleryMenu.propTypes = {
  onClickNext: PropTypes.func,
  onClickPrevious: PropTypes.func,
};
