import React, { PropTypes } from 'react';

function getOnClickHandler(callback) {
  return event => {
    if (event && event.preventDefault) event.preventDefault();
    if (callback) callback();
  };
}

export default function GalleryMenu({ onClickNext, onClickPrevious }) {
  return (
    <div>
      {onClickNext && <button onClick={getOnClickHandler(onClickNext)}>next</button>}
      {onClickPrevious && <button onClick={getOnClickHandler(onClickPrevious)}>previous</button>}
    </div>
  );
}

GalleryMenu.propTypes = {
  onClickNext: PropTypes.func,
  onClickPrevious: PropTypes.func,
};
