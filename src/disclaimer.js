import React, { PropTypes } from 'react';

export default function Disclaimer({ anchor, children }) {
  return <div id={anchor}><p>{children}</p></div>;
}

Disclaimer.propTypes = {
  anchor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
