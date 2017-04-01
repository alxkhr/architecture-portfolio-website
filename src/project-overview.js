import React, { PropTypes } from 'react';
import Thumb from './thumb';

export default function ProjectOverview({ projects }) {
  return (
    <div>
      {projects.map(({ thumbnail: image, thumbnailHover: hoverImage, title, anchor }, i) =>
        <Thumb key={i} {...{ image, hoverImage, title, anchor }} />
      )}
    </div>
  );
}

ProjectOverview.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    thumbnailHover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    anchor: PropTypes.string.isRequired,
  })),
}
