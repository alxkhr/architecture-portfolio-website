import React, { PropTypes } from 'react';

export default function Introduction({ anchor, children }) {
  return <section id={anchor}><p>{children}</p></section>;
}

Introduction.propTypes = {
  anchor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
