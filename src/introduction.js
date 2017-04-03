import React, { PropTypes } from 'react';

export default function Introduction({ anchor, children }) {
  return <div id={anchor}><p>{children}</p></div>;
}

Introduction.propTypes = {
  anchor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
