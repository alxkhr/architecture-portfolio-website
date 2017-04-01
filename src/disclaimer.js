import React, { PropTypes } from 'react';

export default function Disclaimer({ children }) {
  return <div><p>{children}</p></div>;
}

Disclaimer.propTypes = {
  children: PropTypes.node.isRequired,
};
