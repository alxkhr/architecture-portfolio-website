import React, { PropTypes } from 'react';

export default function Introduction({ children }) {
  return <div><p>{children}</p></div>;
}

Introduction.propTypes = {
  children: PropTypes.node.isRequired,
};
