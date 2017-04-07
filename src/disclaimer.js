import React, { PropTypes } from 'react';

export default function Disclaimer({ anchor, children }) {
  return <section id={anchor}><p>{children}</p></section>;
}

Disclaimer.propTypes = {
  anchor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
